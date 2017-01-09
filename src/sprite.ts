import { vec3 } from "gl-matrix";

import { VNComponent } from "./vnComponent";

import { SpriteState } from "./spriteState";

export class Sprite extends VNComponent {
    /**
     * Create a new sprite.
     *
     * TODO
     */
    constructor() {
        super();
    }

    /**
     * Get the current sprite state.
     *
     * TODO
     *
     * @return current sprite state
     */
    public getSpriteState(): SpriteState {
        return new SpriteState(vec3.create(), vec3.create(), vec3.create(), vec3.create(), "", false);
    }
}
