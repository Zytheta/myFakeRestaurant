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

    const intro = elementCreator.createElement(
      "div",
      {
        class: "info-card",
        id: "intro",
      },
      [
        `Here at Chris's Shooting Star Cafe, we bring you the best of this world's food and more! \n Enjoy a nice hamburger, some fries, and a little something from the skies at our family friendly cafe.`,
      ]
    );

    const hours = elementCreator.createElement(
      "div",
      {
        class: "info-card",
        id: "hours",
      },
      [`Open every day except Wednesdays from 10 AM to 12AM!`]
    );

    const location = elementCreator.createElement(
      "div",
      {
        class: "info-card",
        id: "location",
      },
      [
        `Located somewhere nearby!  Check Google maps to find the one nearest you.`,
      ]
    );

    mainElement.appendChild(mainWrapper);
    mainWrapper.appendChild(title);
    mainWrapper.appendChild(intro);
    mainWrapper.appendChild(hours);
    mainWrapper.appendChild(location);
  },
};

export default homeModule;
