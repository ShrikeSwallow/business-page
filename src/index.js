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
    console.log(navButton.classList.value);
    nav.appendChild(navButton);
  });
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  console.log("Generation successful!");
})();

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const servicesBtn = document.querySelector(".services");
const aboutUsBtn = document.querySelector(".about");

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

/*
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(home.headline);
  content.appendChild(home.copy);
});

servicesBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(services.headline);
  content.appendChild(services.subheadline);
  content.appendChild(services.list);
});

aboutUsBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(about.headline);
  content.appendChild(about.subheadline);
  content.appendChild(about.copy);
  content.appendChild(about.contactUs);
  content.appendChild(about.contactCopy);
});
*/
