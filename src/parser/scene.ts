import { Command, process } from "./commands";
import { CommandNode } from "./commands/node";
import { Node } from "./node";
import { Section } from "./section";

export class Scene extends Section {
    public static namePattern: RegExp = /^\<([a-zA-Z_]([a-zA-Z0-9_]+)?)\>:$/;
    public commands: Command[];
    public nextScene: Scene;
    public lastScene: boolean;
    constructor(name: string) {
        super(name);
        this.commands = [];
    }
    public addChild(child: Node): void {
        if (child instanceof CommandNode) {
            this.commands.push(child.command());
            this.children.push(child);
        }
    }
    public consumeLine(line: string): void {
        const command = process(line, this);
        this.commands.push(command);
    }
}
