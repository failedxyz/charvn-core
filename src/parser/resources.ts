// tslint:disable:max-classes-per-file

import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { Node } from "./node";

class ResourceNameException extends Error { }
class ResourcePathException extends Error { }

export class Resource {
    public name: string;
    public abspath: string;
    public loaded: boolean;
    public resource: Buffer;
    constructor(name: string, abspath: string) {
        this.name = name;
        this.abspath = abspath;
        this.loaded = false;
    }
    public load(): void {
        this.resource = readFileSync(this.abspath);
        this.loaded = true;
    }
}

interface IResource {
    [key: string]: Resource;
}

export class Resources extends Node {
    public resources: IResource;
    constructor() {
        super();
        this.resources = {};
    }
    public get(key: string): Resource | null {
        if (key in this.resources) {
            return this.resources[key];
        } else {
            return null;
        }
    }
    public consumeLine(line: string): void {
        const parts: RegExpMatchArray | null = line.match(/(?=\S)[^"\s]*(?:"[^\\"]*(?:\\[\s\S][^\\"]*)*"[^"\s]*)*/g);
        if (parts === null) {
            return;
        }
        const restype: string = parts[0];
        const resname: string = parts[1];
        if (resname.charAt(0) !== "@") {
            throw new ResourceNameException(`Resource ${resname} must begin with @.`);
        }
        let respath: string = parts[2];
        if ((respath.charAt(0) === "\"" && respath.charAt(respath.length - 1) === "\"") ||
            (respath.charAt(0) === "\'" && respath.charAt(respath.length - 1) === "\'")) {
            respath = respath.substring(1, respath.length - 1);
        }
        respath = resolve(respath);
        if (!existsSync(respath)) {
            throw new ResourcePathException(`Resource ${JSON.stringify(respath)} does not exist.`);
        }
        const resource: Resource = new Resource(resname, respath);
        this.resources[resname] = resource;
    }
}
