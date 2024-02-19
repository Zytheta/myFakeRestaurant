// Handles information about menu
import elementCreator from "./elementCreator.js";

const menuModule = {
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
        class: "menu-item",
        id: "title",
      },
      ["Our Menu"]
    );

    const menu = {
      Burger: "$8.50",
      Fries: "$4.00",
      Soda: "$2.25",
      Beer: "$6.00",
      Beans: "$1.00",

      generateMenuItems: function () {
        const menuDiv = elementCreator.createElement("div", {
          class: "menu-item",
          id: "menu",
        });

        for (const item in this) {
          if (
            item !== "generateMenuItems" &&
            item !== "toString" &&
            item !== "valueOf"
          ) {
            const menuItemString = `${item}: ${this[item]}`;
            const menuItemElement = elementCreator.createElement(
              "div",
              {
                class: "menu-item-entry",
              },
              [menuItemString]
            );
            menuDiv.appendChild(menuItemElement);
          }
        }
        return menuDiv;
      },
    };

    const menuElement = menu.generateMenuItems();

    mainElement.appendChild(mainWrapper);
    mainWrapper.appendChild(title);
    mainWrapper.appendChild(menuElement);
  },
};

export default menuModule;
