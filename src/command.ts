import { VNComponent } from "./vnComponent";

export enum CommandType {
    Background,
    Narration,
    Option,
}

export class Command extends VNComponent {
    public readonly type: CommandType;

    constructor(type: CommandType) {
        super();

        this.type = type;
    }
}
