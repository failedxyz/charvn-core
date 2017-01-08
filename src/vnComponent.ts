import * as uuid from "uuid";

export class VNComponent {
    private id: string;
    private classes: string[];
    constructor(classes?: string[]) {
        this.id = uuid.v4();
        this.classes = classes || [];
    }
}
