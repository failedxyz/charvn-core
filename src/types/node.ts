import { NotImplementedException } from "./errors";
import { AbstractSyntaxTree } from "./index";
import { Resources } from "./resources";

export class Node {
    public children: Node[];
    public parent: Node;
    public root: AbstractSyntaxTree;
    constructor() {
        this.children = [];
    }
    public addChild(child: Node): void {
        this.children.push(child);
    }
    public lastChild(): Node | null {
        if (this.children.length > 0) {
            return this.children[this.children.length - 1];
        } else {
            return null;
        }
    }
    public parseChildType(line: string): Node {
        return new Node();
    }
    public consumeLine(line: string): void {
        const match = this.constructor.toString().match(/\w+/g);
        if (match !== null) {
            const className = match[1];
            throw new NotImplementedException(`${className}.consumeLine: Not implemented: ${line}`);
        }
    }
}
