export const updateWinnerMessage = (winner) => {
  if (winner === "tie") return;
  const message =
    winner === "computer" ? "🤖 Computer wins! 🤖" : "🏆🔥 You Win! 🔥🏆";
  const p1msg = document.getElementById("p1msg");
  p1msg.textContent = message;
};