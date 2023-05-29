import { initAllTimeData, lockComputerGameBoardHeight} from './utils/index.js'
import { listenForEnterKey, listenForPlayAgain, listenForPlayerChoice } from './eventListeners/index.js'
import { updateScoreboard  } from './updaters/index.js'

export const initApp = () => {
  initAllTimeData();
  updateScoreboard();
  listenForPlayerChoice();
  listenForEnterKey();
  listenForPlayAgain();
  lockComputerGameBoardHeight();
  document.querySelector("h1").focus();
};

document.addEventListener("DOMContentLoaded", initApp);