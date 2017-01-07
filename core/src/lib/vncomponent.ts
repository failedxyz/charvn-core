import * as uuid from "uuid/v4";

class VNComponent {
    private id: string;
    private classes: string;
    constructor(classes: string) {
        this.id = uuid();
        this.classes = classes || "";
    }
}

export { VNComponent };
