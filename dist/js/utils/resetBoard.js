import GameObj from "../Game.js";
import { createGameImage } from "./index.js";

const Game = new GameObj();

export const resetBoard = () => {
    const gameSquares = document.querySelectorAll(".gameboard div");
    gameSquares.forEach((element) => {
      element.className = "gameboard__square";
    });
  
    const cpSquares = document.querySelectorAll(
      ".computerBoard .gameboard__square"
    );
    cpSquares.forEach((element) => {
      if (element.firstElementChild) element.firstElementChild.remove();
      if (element.id === "cp_rock") createGameImage("rock", element);
      if (element.id === "cp_paper") createGameImage("paper", element);
      if (element.id === "cp_scissors") createGameImage("scissors", element);
    });
  
    document.getElementById("p1msg").textContent = "Player One Chooses...";
    document.getElementById("cpmsg").textContent = "Computer Chooses...";
    const ariaResult = document.getElementById("playAgain");
    ariaResult.ariaLabel = "Player One Chooses";
    document.getElementById("p1msg").focus();
    document.getElementById("playAgain").classList.toggle("hidden");
    Game.endGame();
  };