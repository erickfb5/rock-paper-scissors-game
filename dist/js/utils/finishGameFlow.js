import { buildActionMessage, determineWinner, displayActionMessage, displayComputerChoice, getComputerChoice } from "./index.js";
import { updateAriaResult, updatePersistentData, updateScoreState, updateScoreboard, updateWinnerMessage } from "../updaters/index.js";

export const finishGameFlow = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    const actionMessage = buildActionMessage(
      winner,
      playerChoice,
      computerChoice
    );
    displayActionMessage(actionMessage);
    updateAriaResult(actionMessage, winner);
    updateScoreState(winner);
    updatePersistentData(winner);
    updateScoreboard();
    updateWinnerMessage(winner);
    displayComputerChoice(computerChoice);
  };