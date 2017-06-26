import { VNComponent } from "./vnComponent";

import { CommandSequence } from "./commandSequence";

export class Scene extends VNComponent {
    private commands: CommandSequence;
    private name: string;

    constructor(name: string, commands: CommandSequence) {
        super();

        this.commands = commands;
        this.name = name;
    }
}
