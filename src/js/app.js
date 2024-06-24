import GameSavingLoader from "./gameSavingLoader";


GameSavingLoader.load()
.then((data) => {
  console.log(data);  
}).catch((err) => {
  console.log(err);
})



