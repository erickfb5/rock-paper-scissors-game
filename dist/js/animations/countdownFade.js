export const countdownFade = () => {
  const countdown = document.querySelectorAll(".computerBoard .gameboard__square p");
  countdown.forEach((element) => {
element.className = "fadeOut";
  });
};
