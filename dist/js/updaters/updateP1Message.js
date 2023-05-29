import { properCase } from "../utils/index.js";

export const updateP1Message = (choice) => {
  let p1msg = document.getElementById("p1msg").textContent;
  p1msg += ` ${properCase(choice)}`;
  document.getElementById("p1msg").textContent = p1msg;
};