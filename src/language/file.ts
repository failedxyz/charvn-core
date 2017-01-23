import { Node } from "./node";
import { ResourceNode } from "./resource";
import { SectionNode } from "./section";

/**
 * A single .char file
 */
export class FileNode extends Node {
    /** If this file is the main file */
    private entryPoint: boolean;
    /** File path relative to project root */
    private filePath: string;
    /** Sections in this file */
    private sections: SectionNode[];
    /** Referenced .char files */
    private references: FileNode[];
    /** Referenced resource paths */
    private resources: ResourceNode[];

    constructor(sections: SectionNode[]) {
        super(sections);
    }
}
