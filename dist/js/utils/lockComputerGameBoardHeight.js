export const lockComputerGameBoardHeight = () => {
    const cpGameBoard = document.querySelector(".computerBoard .gameboard");
    const cpGameBoardStyles = getComputedStyle(cpGameBoard);
    const height = cpGameBoardStyles.getPropertyValue("height");
    cpGameBoard.style.minHeight = height;
  };