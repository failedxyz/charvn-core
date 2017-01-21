import { FileNode } from "./file";
import { Node } from "./node";

/**
 * A game is the collection of all files and resources involved, including extra details such as
 * the menu and starting scene.
 */
export class GameNode extends Node {
    public files: FileNode[];

    constructor(files: FileNode[]) {
        super(files);

        this.files = files;
    }
}
