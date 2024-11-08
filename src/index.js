import "./styles.css";
import * as home from "./home.js";

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
    nav.appendChild(navButton);
  });
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  console.log("Generation successful!");
  return content;
})();
