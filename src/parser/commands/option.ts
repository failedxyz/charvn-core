// tslint:disable:max-classes-per-file

import { Command } from "./index";
import { CommandNode } from "./node";

export class Choice {
    public name: string;
    public display: string;
    constructor(name: string, display: string) {
        this.name = name;
        this.display = display;
    }
}

export class OptionCommand extends Command {
}

export class OptionNode extends CommandNode {
    public choices: Choice[];
    constructor(line: string) {
        super();
        this.choices = [];
    }
    public command(): Command {
        const command: OptionCommand = new OptionCommand();
        return command;
    }
    public consumeLine(line: string): void {
        const ind: number = line.indexOf(":");
        const name = line.substring(0, ind).trim();
        const display = line.substring(ind + 1).trim();
        this.choices.push(new Choice(name, display));
    }
}
