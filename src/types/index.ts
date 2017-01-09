import { IllegalArgumentException, IllegalStateException } from "./errors";
import { Node } from "./node";
import { Resource, Resources } from "./resources";
import { Scene } from "./scene";
import { Section } from "./section";

export class AbstractSyntaxTree extends Node {
    constructor() {
        super();
    }
    public addChild(child: Node): void {
        if (child instanceof Scene) {
            let lastScene: Scene | undefined;
            for (const c of this.children.slice(0).reverse()) {
                if (c instanceof Scene) {
                    lastScene = c;
                    break;
                }
            }
            if (lastScene !== undefined) {
                lastScene.nextScene = child;
            }
        }
        this.children.push(child);
    }
    public getResource(key: string): Resource {
        for (const node of this.children) {
            if (node instanceof Resources) {
                const res = node.get(key);
                if (res == null) {
                    throw new IllegalArgumentException(`There is no such resource ${key}`);
                } else {
                    return res;
                }
            }
        }
        throw new IllegalStateException("This script has no resources loaded!");
    }
    public parseChildType(line: string): Node {
        let newNode: Node;
        switch (line.charAt(0)) {
            case "<":
                newNode = new Scene(Scene.getName(line));
                break;
            default:
                const sectionName: string = Section.getName(line);
                switch (sectionName) {
                    case "resources":
                        newNode = new Resources();
                        break;
                    default:
                        newNode = new Section(sectionName);
                        break;
                }
                break;
        }
        return newNode;
    }
}
