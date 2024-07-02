import read from "./render";
import json from "./parser";
import GameSaving from "./gameSaving";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => new GameSaving(JSON.parse(value)))
  }
}
