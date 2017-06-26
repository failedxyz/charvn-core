import { Command, CommandType } from "../command";

export class OptionCommand extends Command {
    private prompt: string;
    private options: string[];
    private onResult: (result: string) => void;

    constructor(prompt: string, options: string[], onResult: (result: string) => void) {
        super(CommandType.Option);

        this.prompt = prompt;
        this.options = options;
        this.onResult = onResult;
    }
}
