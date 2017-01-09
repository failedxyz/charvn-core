import { VNComponent } from "./vnComponent";

export enum ResourceType {
    Audio,
    Image,
    Video,
    Model,
}

export class Resource extends VNComponent {
    public readonly type: ResourceType;
    constructor(type: ResourceType) {
        super();

        this.type = type;
    }
}
