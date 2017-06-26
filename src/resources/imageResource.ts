import { Resource, ResourceType } from "../resource";

export class ImageResource extends Resource {
    private path: string;

    constructor(path: string) {
        super(ResourceType.Image);

        this.path = path;
    }
}
