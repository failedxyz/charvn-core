import { vec3 } from "gl-matrix";

import { VNComponent } from "./vnComponent";

/**
 * Immutable data structure representing the state of a sprite for rendering.
 */
export class SpriteState extends VNComponent {
    /**
     * Create a sprite state from object properties.
     *
     * @param any object with properties
     */
    public static fromObject(obj: any): SpriteState {
        const params: any = {
            anchor: vec3.create(),
            position: vec3.create(),
            resource: "",
            rotation: vec3.create(),
            scale: vec3.create(),
            visible: true,
        };
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop) && params.hasOwnProperty(prop)) {
                params[prop] = obj[prop];
            }
        }
        return new SpriteState(params.position as vec3, params.rotation as vec3, params.scale as vec3,
            params.anchor as vec3, params.resource as string, params.visible as boolean);
    }

    public readonly position: vec3;
    public readonly rotation: vec3;
    public readonly scale: vec3;
    public readonly anchor: vec3;
    public readonly resource: string;
    public readonly visible: boolean;

    /**
     * Create a new sprite state with readonly values.
     */
    constructor(position: vec3, rotation: vec3, scale: vec3, anchor: vec3, resource: string, visible: boolean) {
        super();

        this.position = vec3.clone(position);
        this.rotation = vec3.clone(rotation);
        this.scale = vec3.clone(scale);
        this.anchor = vec3.clone(anchor);
        this.resource = resource;
        this.visible = visible;
    }
}
