export const listenForEnterKey = () => {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Enter" && event.target.tagName === "IMG") {
        event.target.click();
      }
    });
  };