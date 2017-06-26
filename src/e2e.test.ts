import { assert, expect } from "chai";

import { Game, GameState, Resource, Scene } from ".";
import { BackgroundCommand, NarrationCommand, OptionCommand } from "./commands";
import { ImageResource } from "./resources";

describe("charvn", () => {
    it("initialize a game", () => {
        const resources: {[name: string]: Resource} = {
            "blue room bg": new ImageResource("blue_room.jpg"),
            "empty room bg": new ImageResource("empty_room.jpg"),
            "empty room buttons bg": new ImageResource("empty_room_btns.jpg"),
            "red room bg": new ImageResource("red_room.jpg"),
        };

        const emptyScene = new Scene("empty room", [
            new BackgroundCommand(resources["empty room bg"]),
            new NarrationCommand("You wake up in a suspicious room."),
            new BackgroundCommand(resources["empty room buttons bg"]),
            new NarrationCommand("You see a box with two buttons: one red and one blue."),
            new OptionCommand("Which button do you press?",
                ["Red", "Blue"],
                (result) => {
                    if (result === "Red") {
                        this.setNextScene("red room");
                    } else if (result === "Blue") {
                        this.setNextScene("blue room");
                    }
                }),
        ]);
        const redScene = new Scene("red room", [
            new BackgroundCommand(resources["red room bg"]),
            new NarrationCommand("You wake up in a red room. The end."),
        ]);
        const blueScene = new Scene("blue room", [
            new BackgroundCommand(resources["blue room bg"]),
            new NarrationCommand("You wake up in a blue room. The end."),
        ]);
        const game = new Game([
            emptyScene,
            redScene,
            blueScene,
        ], new GameState());
    });
});
