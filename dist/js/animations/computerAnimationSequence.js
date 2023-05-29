import { askToPlayAgain, finishGameFlow } from "../utils/index.js";
import { computerChoiceAnimation, countdownFade, deleteCountdown } from "./index.js";

export const computerAnimationSequence = (playerChoice) => {
    let interval = 1000;
    setTimeout(() => computerChoiceAnimation("cp_rock", 1), interval);
    setTimeout(() => computerChoiceAnimation("cp_paper", 2), (interval += 500));
    setTimeout(
      () => computerChoiceAnimation("cp_scissors", 3),
      (interval += 500)
    );
    setTimeout(() => countdownFade(), (interval += 750));
    setTimeout(() => {
      deleteCountdown();
      finishGameFlow(playerChoice);
    }, (interval += 1000));
    setTimeout(() => askToPlayAgain(), (interval += 1000));
  };