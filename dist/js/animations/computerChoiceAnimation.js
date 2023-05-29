export const computerChoiceAnimation = (elementId, number) => {
    const element = document.getElementById(elementId);
    element.firstElementChild.remove();
    const p = document.createElement("p");
    p.textContent = number;
    element.appendChild(p);
  };