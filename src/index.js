import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const restaurantWebpage = (function () {
  const consoleLogContent = {
    welcomeMessage: function () {
      console.log("Spinning up the 'raunt.");
    },
  };
  consoleLogContent.welcomeMessage();

  return consoleLogContent;
})();
