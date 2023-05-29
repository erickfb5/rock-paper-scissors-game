import GameObj from "../Game.js";

import {updateP1Message} from '../updaters/index.js'
import {computerAnimationSequence} from '../animations/index.js'

const Game = new GameObj();

export const listenForPlayerChoice = () => {
    const p1Images = document.querySelectorAll(
      ".playerBoard .gameboard__square img"
    );
    p1Images.forEach((img) => {
      img.addEventListener("click", (event) => {
        if (Game.getActiveStatus()) return;
        Game.startGame();
        const playerChoice = event.target.parentElement.id;
        updateP1Message(playerChoice);
        p1Images.forEach((img) => {
          if (img === event.target) {
            img.parentElement.classList.add("selected");
          } else {
            img.parentElement.classList.add("not-selected");
          }
        });
        computerAnimationSequence(playerChoice);
      });
    });
  };