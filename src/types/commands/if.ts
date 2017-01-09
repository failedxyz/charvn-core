// tslint:disable:max-classes-per-file

import { Expression } from "../expression";
import { Node } from "../node";
import { ElifNode } from "./elif";
import { ElseNode } from "./else";
import { Command, process } from "./index";
import { CommandNode } from "./node";

export class IfCommand extends Command {
    public condition: Expression;
    public truthy: Command[];
    public falsy: Command[];
    constructor(condition: Expression, truthNode: Node, falseNode: Node) {
        super();
        this.condition = condition;
    }
}

export class IfNode extends CommandNode {
    public condition: Expression;
    public falseNode: CommandNode | undefined;
    public commands: Command[];
    constructor(line: string) {
        super();
        line = line.substring(3, line.length - 1);
        this.condition = new Expression(line);
        this.commands = [];
    }
    public addChild(child: Node): void {
        if (child instanceof ElifNode || child instanceof ElseNode) {
            if (this.falseNode === undefined) {
                this.falseNode = child;
            } else {
                this.falseNode.addChild(child);
            }
        }
    }
    public command(): IfCommand {
        let falseNode: Node = new CommandNode();
        if (this.falseNode !== undefined) {
            falseNode = this.falseNode;
        }
        const command: IfCommand = new IfCommand(this.condition, this, falseNode);
        return command;
    }
    public consumeLine(line: string): void {
        const command = process(line, this);
        this.commands.push(command);
    }
}
