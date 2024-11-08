import "./styles.css";
import * as home from "./home.js";
import * as services from "./services.js";
import * as about from "./about-us.js";

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
    navButton.classList.add(element.trim().toLowerCase().replaceAll(" ", "-"));
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
const aboutUsBtn = document.querySelector(".about-us");

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
