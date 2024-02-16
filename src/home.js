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

    mainElement.appendChild(title);

    const intro = elementCreator.createElement();

    const hours = elementCreator.createElement();

    const location = elementCreator.createElement();
  },
};

export default homeModule;
