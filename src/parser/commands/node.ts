import { Node } from "../node";
import { Command } from "./index";

export class CommandNode extends Node {
    public lines: string[];
    constructor() {
        super();
        this.lines = [];
    }
    public command(): Command {
        // TODO
        const command = new Command();
        return command;
    }
    public consumeLine(line: string): void {
        this.lines.push(line);
    }
}
