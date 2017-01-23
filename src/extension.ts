import { GameNode } from "./language/game";

/**
 * An extension takes a parsed CharVN script and builds the project.
 */
export class Extension {
    /**
     * Build the game
     *
     * @return success
     */
    public build(game: GameNode): boolean {
        return false;
    }
}
