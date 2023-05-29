export const askToPlayAgain = () => {
    const playAgain = document.getElementById("playAgain");
    playAgain.classList.toggle("hidden");
    playAgain.focus();
  };