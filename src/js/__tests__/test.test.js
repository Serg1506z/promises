import GameSavingLoader from "../gameSavingLoader";
import read from "../render";
import json from "../parser";

test('testing', async () => {
    expect(Object.keys(await GameSavingLoader.load())).toEqual(['id', 'created', 'userInfo'])
    expect( await read().then((data) => json(data).then((value) => JSON.parse(value)))).toEqual(await GameSavingLoader.load())
})