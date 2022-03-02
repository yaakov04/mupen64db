import inquirer from "inquirer";
import getGames from "../modules/getGames";

const choices = function (games) {
  const choices = games.map((game) => {
    return { name: game.name, value: game.id };
  });
  return choices;
};

const findGame = function (id, games) {
  const game = games.find((game) => game.id === id);
  return game;
};

const selectGame = async function () {
  const games = getGames();
  const game = await inquirer.prompt([
    {
      type: "list",
      name: "id",
      message: "Select a game",
      choices: choices(games),
    },
  ]);

  const selectedGame = findGame(game.id, games);
  return selectedGame;
};

export default selectGame;
