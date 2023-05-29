export const updateAriaResult = (result, winner) => {
    const ariaResult = document.getElementById("playAgain");
    const winMessage =
      winner === "player"
        ? "Congratulation, you are the winner!"
        : winner === "computer"
        ? "The computer is the winner"
        : "";
  
    ariaResult.ariaLabel = `${result} ${winMessage} Click or press enter to play again.`;
  };