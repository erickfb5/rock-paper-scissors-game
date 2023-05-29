import GameObj from "../Game.js";

const Game = new GameObj();

export const updatePersistentData = (winner) => {
  const store = winner === "computer" ? "cpAlltime" : "p1AllTime";
  const score =
    winner === "computer" ? Game.getCpAllTime() : Game.getP1AllTime();
  localStorage.setItem(store, score);
};