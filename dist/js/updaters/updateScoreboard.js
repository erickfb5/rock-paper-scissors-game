import GameObj from "../Game.js";

const Game = new GameObj();

export const updateScoreboard = () => {
  const p1AllTimeScore = document.getElementById("p1_all_time_score");
  p1AllTimeScore.textContent = Game.getP1AllTime();
  p1AllTimeScore.ariaLabel = `Player One has ${Game.getP1AllTime()} all time wins.`;

  const cpAllTimeScore = document.getElementById("cp_all_time_score");
  cpAllTimeScore.textContent = Game.getCpAllTime();
  cpAllTimeScore.ariaLabel = `Computer Player has ${Game.getCpAllTime()} all time wins.`;

  const p1SessionScore = document.getElementById("p1_session_score");
  p1SessionScore.textContent = Game.getP1Session();
  p1SessionScore.ariaLabel = `Player One has ${Game.getP1Session()} wins this session.`;

  const cpSessionScore = document.getElementById("cp_session_score");
  cpSessionScore.textContent = Game.getCpSession();
  cpSessionScore.ariaLabel = `Computer Player has ${Game.getCpSession()} wins this session.`;
};