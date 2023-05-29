export const createGameImage = (icon, appendToElement) => {
    const image = document.createElement("img");
    image.src = `img/${icon}.png`;
    image.alt = icon;
    appendToElement.appendChild(image);
  };