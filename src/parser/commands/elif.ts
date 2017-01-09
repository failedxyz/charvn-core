// tslint:disable:max-classes-per-file

import { Expression } from "../expression";
import { IfCommand, IfNode } from "./if";

export class ElifCommand extends IfCommand {
}

export class ElifNode extends IfNode {
    constructor(line: string) {
        super(line);
        line = line.substring(5, line.length - 1);
        this.condition = new Expression(line);
    }
}
