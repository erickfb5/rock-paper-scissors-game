import { getAction, properCase } from "./index.js";

export const buildActionMessage = (winner, playerChoice, computerChoice) => {
    if (winner === "tie") return "Tie game!";
    if (winner === "computer") {
      const action = getAction(computerChoice);
      return `${properCase(computerChoice)} ${action} ${properCase(playerChoice)}.`;
    } else {
      const action = getAction(playerChoice);
      return `${properCase(playerChoice)} ${action} ${properCase(computerChoice)}.`;
    }
  };