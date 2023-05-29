export const determineWinner = (player, computer) => {
    if (player === computer) return "tie";
    if (
      (player === "rock" && computer === "paper") ||
      (player === "paper" && computer === "scissors") ||
      (player === "scissors" && computer === "rock")
    ) {
      return "computer";
    }
    return "player";
  };