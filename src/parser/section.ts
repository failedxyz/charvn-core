import { ElifNode } from "./commands/elif";
import { ElseNode } from "./commands/else";
import { IfNode } from "./commands/if";
import { OptionNode } from "./commands/option";
import { ParseException } from "./errors";
import { Node } from "./node";

export class Section extends Node {
    public static namePattern: RegExp = /^([a-zA-Z_]([a-zA-Z0-9_]+)?):$/;
    public static getName(line: string): string {
        const match: RegExpMatchArray | null = line.match(this.namePattern);
        if (match != null) {
            return match[1];
        }
        throw new ParseException(`Could not parse section name: ${line}`);
    }
    public name: string;
    public lines: string[];
    constructor(name: string) {
        super();
        this.name = name;
        this.lines = [];
    }
    public parseChildType(line: string): Node {
        // TODO
        let newSection: Node;
        const command = line.split(" ")[0];
        switch (command) {
            case "option":
                newSection = new OptionNode(line);
                break;
            case "if":
                newSection = new IfNode(line);
                break;
            case "elif":
                newSection = new ElifNode(line);
                break;
            case "else":
                newSection = new ElseNode(line);
                break;
            default:
                newSection = new Section("");
                break;
        }
        return newSection;
    }
    public consumeLine(line: string): void {
        this.lines.push(line);
    }
}
