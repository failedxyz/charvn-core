import { Command, CommandType } from "../command";
import { Resource } from "../resource";

export class BackgroundCommand extends Command {
    private resource: Resource;

    constructor(resource: Resource) {
        super(CommandType.Background);

        this.resource = resource;
    }
}
