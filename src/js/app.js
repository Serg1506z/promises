import GameSavingLoader from "./gameSaving";

GameSavingLoader.load()
.then((data) => {
  console.log(data);  
}).catch((err) => {
  console.log(err);
})



