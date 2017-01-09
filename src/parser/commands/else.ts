// tslint:disable:max-classes-per-file

import { Command } from "./index";
import { CommandNode } from "./node";

export class ElseCommand extends Command {
}

export class ElseNode extends CommandNode {
    constructor(line: string) {
        super();
    }
}
