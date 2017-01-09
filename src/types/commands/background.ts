import { Resource } from "../resources";
import { Command } from "./index";

export class BackgroundCommand extends Command {
    public resname: string;
    public resource: Resource;
    constructor(args: string[]) {
        super();
        this.resname = args[0];
    }
}
