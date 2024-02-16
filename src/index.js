import "./style.css";
import elementCreator from "./elementCreator.js";
import homeModule from "./home.js";
// import "./menu.js";
import Background from "./background.jpg";
import icon from "./shooting-star.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const restaurantWebpage = (function () {
  const consoleLogContent = {
    welcomeMessage: function () {
      console.log("Spinning up the 'raunt.");
    },
  };

  const mainPage = {
    headerElement: null,
    mainElement: null,
    footerElement: null,

    cacheDom: function () {
      this.headerElement = document.querySelector("header");
      this.mainElement = document.querySelector("main");
      this.footerElement = document.querySelector("footer");
    },

    headerContent: function () {
      const headerWrapper = elementCreator.createElement(
        "div",
        {
          class: "header-wrapper",
          id: "header-wrapper",
        },
        []
      );

      const restaurantIcon = elementCreator.createElement(
        "img",
        {
          src: "./shooting-star.png",
          alt: "A shooting star.",
          height: "25px",
          width: "auto",
        },
        []
      );

      const homeElement = elementCreator.createElement(
        "div",
        {
          class: "header-bar",
        },
        ["Home"]
      );

      const menuElement = elementCreator.createElement(
        "div",
        {
          class: "header-bar",
        },
        ["Menu"]
      );

      const contactElement = elementCreator.createElement(
        "div",
        {
          class: "header-bar",
        },
        ["Contact"]
      );

      this.headerElement.appendChild(headerWrapper);
      headerWrapper.appendChild(restaurantIcon);
      headerWrapper.appendChild(homeElement);
      headerWrapper.appendChild(menuElement);
      headerWrapper.appendChild(contactElement);
    },

    footerContent: function () {
      const footerWrapper = elementCreator.createElement(
        "div",
        {
          class: "footer-wrapper",
          id: "footer-wrapper",
        },
        []
      );

      const shootingStarAttribution = elementCreator.createElement(
        "div",
        {
          class: "footer-attribution",
          id: "shooting-star-attribution",
        },
        [""]
      );

      const flaticonLink = elementCreator.createElement(
        "a",
        {
          href: "https://www.flaticon.com/free-icons/star",
          target: "_blank", // Opens in new tab
        },
        ["Star Icons created by Freepik - Flaticon"]
      );

      const backgroundAttribution = elementCreator.createElement(
        "div",
        {
          class: "footer-attribution",
          id: "background-attribution",
        },
        [""]
      );

      const freepikLink = elementCreator.createElement(
        "a",
        {
          href: "https://www.freepik.com/free-vector/abstract-halftone-background_9009351.htm#query=orange%20background&position=11&from_view=keyword&track=ais&uuid=934154cc-0e94-4a15-b5e4-70bf7288e671",
          target: "_blank", // Opens in new tab
        },
        ["Background image sourced from freepik.com"]
      );

      this.footerElement.appendChild(footerWrapper);
      shootingStarAttribution.appendChild(flaticonLink);
      footerWrapper.appendChild(shootingStarAttribution);
      backgroundAttribution.appendChild(freepikLink);
      footerWrapper.appendChild(backgroundAttribution);
    },

    init: function () {
      this.cacheDom();
      this.headerContent();
      homeModule.fillContent(this.mainElement);
      this.footerContent();
    },
  };

  consoleLogContent.welcomeMessage();
  mainPage.init();

  return consoleLogContent;
})();
