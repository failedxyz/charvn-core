import { assert, expect } from "chai";
import "mocha";

import { GameState } from "./gameState";

const gs = new GameState();
gs.currentCommandIndex = 2;
gs.currentSceneIndex = 1;
gs.variables.set("baz", [{ foo: "bar" }, 3]);
gs.variables.set("foo", "bar");

const data: any = {
    currentCommandIndex: 2,
    currentSceneIndex: 1,
    variables: {
        baz: [{ foo: "bar" }, 3],
        foo: "bar",
    },
};

describe("Game State", () => {
    it("should serialize its data", () => {
        expect(gs.serialize()).to.deep.equal(data);
    });
    it("should deserialize data", () => {
        const t = new GameState();
        assert(t.deserialize(data));
        expect(t.currentCommandIndex).to.equal(data.currentCommandIndex);
        expect(t.currentSceneIndex).to.equal(data.currentSceneIndex);
        for (const key in data.variables) {
            if (!data.variables.hasOwnProperty(key)) {
                continue;
            }
            assert(t.variables.has(key));
            expect(t.variables.get(key)).to.equal(data.variables[key]);
        }

    });
    it("should serialize and deserialize to the same object", () => {
        const t = new GameState();
        assert(t.deserialize(data));
        expect(t.serialize()).to.deep.equal(data);
    });
});
