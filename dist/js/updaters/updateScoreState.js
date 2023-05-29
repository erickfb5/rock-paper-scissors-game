import GameObj from "../Game.js";

const Game = new GameObj();

export const updateScoreState = (winner) => {
  if (winner === "tie") return;
  winner === "computer" ? Game.cpWins() : Game.p1Wins();
};