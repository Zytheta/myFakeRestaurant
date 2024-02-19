import "./style.css";
import elementCreator from "./elementCreator.js";
import homeModule from "./home.js";
import menuModule from "./menu.js";
import contactModule from "./contact.js";
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
    homeElement: null,
    menuElement: null,
    contactElement: null,

    cacheDom: function () {
      this.headerElement = document.querySelector("header");
      this.mainElement = document.querySelector("main");
      this.footerElement = document.querySelector("footer");
      this.homeElement = document.getElementById("home");
      this.menuElement = document.getElementById("menu");
      this.contactElement = document.getElementById("contact");
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

      this.homeElement = elementCreator.createElement(
        "button",
        {
          class: "header-bar",
          id: "home",
        },
        ["Home"]
      );

      this.menuElement = elementCreator.createElement(
        "button",
        {
          class: "header-bar",
          id: "menu",
        },
        ["Menu"]
      );

      this.contactElement = elementCreator.createElement(
        "button",
        {
          class: "header-bar",
          id: "contact",
        },
        ["Contact"]
      );

      this.headerElement.appendChild(headerWrapper);
      headerWrapper.appendChild(restaurantIcon);
      headerWrapper.appendChild(this.homeElement);
      headerWrapper.appendChild(this.menuElement);
      headerWrapper.appendChild(this.contactElement);
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

    contentScrubber: function () {
      while (this.mainElement.firstChild) {
        this.mainElement.removeChild(this.mainElement.firstChild);
      }
    },

    eventListeners: function () {
      this.homeElement.addEventListener("click", () => {
        console.log("Home page event fired!");
        this.contentScrubber();
        homeModule.fillContent(this.mainElement);
      });

      this.menuElement.addEventListener("click", () => {
        console.log("Menu page event fired!");
        this.contentScrubber();
        menuModule.fillContent(this.mainElement);
      });
    },

    init: function () {
      this.cacheDom();
      this.headerContent();
      this.contentScrubber();
      homeModule.fillContent(this.mainElement);
      this.footerContent();
      this.eventListeners();
    },
  };

  consoleLogContent.welcomeMessage();
  mainPage.init();

  return consoleLogContent;
})();
