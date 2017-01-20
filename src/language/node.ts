/**
 * Abstract node class in the tree
 */
export class Node {
    public parent: Node;
    public children: Node[];
    private lines: string[];

    /**
     * Create a new node
     */
    constructor(children: Node[]) {
        this.children = children;
    }

    /**
     * Recursively set parent nodes
     */
    public setParent() {
        for (const child of this.children) {
            child.parent = this;
            child.setParent();
        }
    }
}
