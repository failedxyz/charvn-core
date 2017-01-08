import { VNComponent } from "./vncomponent";

import { DisplayState } from "./displayState";
import { GameState } from "./gameState";
import { Scene } from "./scene";

export class Game extends VNComponent {
    private initialScene: Scene;
    private scenes: Scene[];
    private state: GameState;

    constructor(initialScene: Scene, scenes: Scene[], state: GameState) {
        super();

        this.initialScene = initialScene;
        this.scenes = scenes;
        this.state = state;
    }

    /**
     * Return a copy of the current game display state.
     */
    public render(): DisplayState {
        return new DisplayState();
    }

    /**
     * Save the state to an object
     *
     * @return Serialized state object
     */
    public saveState(): any {
        return "{}";
    }

    /**
     * Load the state from a serialized object
     *
     * @param state Serialized state object
     */
    public loadState(state: any) {
        return;
    }
}
