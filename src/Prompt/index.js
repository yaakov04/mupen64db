import selectGame from "./selectGame";
import run from "../modules/run";

const Prompt = async function () {
  const game = await selectGame();
  await run(game.path);
  console.log(game);
};

export default Prompt;
