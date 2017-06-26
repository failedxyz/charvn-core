import { VNComponent } from "./vnComponent";

import { DisplayState } from "./displayState";
import { GameState } from "./gameState";
import { Scene } from "./scene";

export class Game extends VNComponent {
    private scenes: Scene[];
    private state: GameState;

    constructor(scenes: Scene[], state: GameState) {
        super();

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
     * Save the state to a string
     *
     * @return State string
     */
    public saveState(): string {
        return JSON.stringify(this.state.serialize());
    }

    /**
     * Load the state from a string
     *
     * @param state State string
     * @return Whether or not loading was successful
     */
    public loadState(stateString: string) {
        try {
            const state: any = JSON.parse(stateString);
            return this.state.deserialize(state);
        } catch (e) {
            return false;
        }
    }
}
