import inquirer from "inquirer";
import setError from "../modules/setError";
import getGames from "../modules/getGames";
import validateSchema from "../modules/validateSchema";

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

const validateGameList = function (games){
	games.forEach(game => {
		const isSchemaValid = validateSchema(game);
		
		if(!isSchemaValid) {
			console.error('Error in:');
			console.dir(game);
			throw setError({name:'Syntax Error', message:`There is a syntax error in "game-libary.json"`})
		};
		
		const regExp = /^.*\.(z64)$/;
		const isGameExtensionValid = regExp.test(game.path);
		
		if(!isGameExtensionValid) {throw setError({name:'Invalid Rom', message:`The file: ${game.path} does not have a valid extension. Supported extensions: ".z64"`})};
		
		
	});
}

const selectGame = async function () {
  const games = getGames();
  
  if(games.length === 0) {throw setError({name:'No Games', message:'No games in "game-libary.json"'})};

  
  validateGameList(games);
  
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
