import { resetBoard } from "../utils/index.js";

export const listenForPlayAgain = () => {
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      resetBoard();
    });
  };