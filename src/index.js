import "./styles.css";
import * as home from "./home.js";
import * as services from "./services.js";
import * as about from "./about.js";

const htmlInit = (() => {
  const header = document.createElement("header");
  document.body.appendChild(header);
  const nav = document.createElement("nav");
  header.appendChild(nav);
  const navArray = ["Home", "Services", "About Us"];
  navArray.forEach((element) => {
    const navButton = document.createElement("button");
    navButton.setAttribute("type", "button");
    navButton.textContent = element;
    const className = element.split(" ").splice(0, 1).join("").toLowerCase();
    navButton.classList.add(className);
    nav.appendChild(navButton);
  });
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  content.appendChild(home.container);
  console.log("Generation successful!");
})();

const content = document.querySelector("#content");

const navButtons = document.querySelectorAll("nav button");
navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    content.textContent = "";
    switch (event.currentTarget.classList.value) {
      case "home":
        content.appendChild(home.container);
        break;
      case "services":
        content.appendChild(services.container);
        break;
      case "about":
        content.appendChild(about.container);
        break;
    }
  });
});
