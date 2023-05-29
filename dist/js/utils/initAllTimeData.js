import GameObj from "../Game.js";

const Game = new GameObj();

export const initAllTimeData = () => {
  Game.setP1AllTime(parseInt(localStorage.getItem("p1AllTime")) || 0);
  Game.setCpAllTime(parseInt(localStorage.getItem("cpAllTime")) || 0);
};

