import { createGameImage } from "./index.js";

export const displayComputerChoice = (choice) => {
    const square = document.getElementById("cp_paper");
    createGameImage(choice, square);
  };