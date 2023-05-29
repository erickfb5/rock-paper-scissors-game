export const getAction = (choice) => {
  return choice === "rock" ? "smashes" : choice === "paper" ? "wraps" : "cuts";
};
