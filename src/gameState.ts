import { VNComponent } from "./vncomponent";

import { Command } from "./command";
import { CommandSequence } from "./commandSequence";
import { Scene } from "./scene";

export class GameState extends VNComponent {
    private currentScene: Scene;
    private currentCommandSequence: CommandSequence;
    private currentCommandIndex: number;
    private variables: Map<string, any>;

    constructor(currentScene: Scene) {
        super();

        this.currentScene = currentScene;
    }
}
