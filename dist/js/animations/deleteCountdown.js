export const deleteCountdown = () => {
    const countdown = document.querySelectorAll(".computerBoard .gameboard__square p");
    countdown.forEach((element) => {
      element.remove();
    });
  };
  