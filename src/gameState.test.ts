import { expect } from "chai";
import "mocha";

import { GameState } from "./gameState";

describe("Game State", () => {
    it("should serialize its data", () => {
        const gs = new GameState();
        gs.currentCommandIndex = 2;
        gs.currentSceneIndex = 1;
        gs.variables.set("baz", [{ foo: "bar" }, 3]);
        gs.variables.set("foo", "bar");

        expect(gs.serialize()).to.deep.equal({
            currentCommandIndex: 2,
            currentSceneIndex: 1,
            variables: {
                baz: [{ foo: "bar" }, 3],
                foo: "bar",
            },
        });
    });
});
