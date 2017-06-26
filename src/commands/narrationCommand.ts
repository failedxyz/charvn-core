import { Command, CommandType } from "../command";

export class NarrationCommand extends Command {
    private text: string;

    constructor(text: string) {
        super(CommandType.Narration);

        this.text = text;
    }
}
