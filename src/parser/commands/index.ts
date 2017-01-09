// tslint:disable:max-classes-per-file

import { AbstractSyntaxTree } from "../";
import { CommandSyntaxException } from "../errors";
import { Node } from "../node";

export class Command {
    public line: string;
    public root: AbstractSyntaxTree;
}

import { BackgroundCommand } from "./background";

export function process(line: string, caller: Node): Command {
    let newCommand = new Command();
    const parts: RegExpMatchArray | null = line.match(/(?=\S)[^"\s]*(?:"[^\\"]*(?:\\[\s\S][^\\"]*)*"[^"\s]*)*/g);
    if (parts === null) {
        throw new CommandSyntaxException(`You screwed up: ${line}`);
    }
    const commandName = parts.shift();
    if (commandName === undefined) {
        throw new CommandSyntaxException(`You screwed up: ${line}`);
    }
    switch (commandName.toLowerCase()) {
        case "background":
            newCommand = new BackgroundCommand(parts);
            break;
        default:
            // TODO wut?
            newCommand.line = commandName;
            break;
    }
    newCommand.root = caller.root;
    return newCommand;
}
