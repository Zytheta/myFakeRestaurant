// Handles information about restaurant (introduction, hours, location)
import elementCreator from "./elementCreator.js";

const homeModule = {
  fillContent: function (mainElement) {
    const mainWrapper = elementCreator.createElement(
      "div",
      {
        class: "main-wrapper",
        id: "main-wrapper",
      },
      []
    );

    const title = elementCreator.createElement(
      "div",
      {
        class: "info-card",
        id: "title",
      },
      ["Welcome to Chris's Shooting Star Restaurant!"]
    );

    const intro = elementCreator.createElement();

    const hours = elementCreator.createElement();

    const location = elementCreator.createElement();

    mainElement.appendChild(mainWrapper);
    mainWrapper.appendChild(title);
  },
};

export default homeModule;
