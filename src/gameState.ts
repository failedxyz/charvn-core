import { VNComponent } from "./vnComponent";

import { Command } from "./command";
import { CommandSequence } from "./commandSequence";
import { Scene } from "./scene";

export class GameState extends VNComponent {
    public currentCommandIndex: number = 0;
    public currentSceneIndex: number = 0;
    public variables: Map<string, any> = new Map();

    constructor() {
        super();
    }

    /**
     * Serialize the state to an object
     *
     * @return Serialized state
     */
    public serialize(): any {
        const vars: {[key: string]: any} = {};
        for (const [key, value] of this.variables.entries()) {
            vars[key] = value;
        }
        const state: any = {
            currentCommandIndex: this.currentCommandIndex,
            currentSceneIndex: this.currentSceneIndex,
            variables: vars,
        };
        return state;
    }

    /**
     * Deserialize the state from an object
     *
     * @param state State object
     * @return Whether or not deserialization was successful
     */
    public deserialize(state: any): boolean {
        if (state.currentCommandIndex === undefined ||
            state.currentSceneIndex === undefined ||
            state.variables === undefined) {
            return false;
        }

        this.currentCommandIndex = state.currentCommandIndex as number;
        this.currentSceneIndex = state.currentSceneIndex as number;
        this.variables.clear();
        for (const key of state.variables) {
            this.variables.set(key, state.variables[key]);
        }

        return true;
    }
}
