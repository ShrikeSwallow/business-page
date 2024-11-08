import "./styles.css";
const htmlInit = (() => {
  const header = document.createElement("header");
  document.body.appendChild(header);
  const nav = document.createElement("nav");
  header.appendChild(nav);
  const navArray = ["Home", "Services", "Pricing", "About Us"];
  navArray.forEach((element) => {
    const navButton = document.createElement("button");
    navButton.textContent = element;
    nav.appendChild(navButton);
  });
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);
  console.log("Generation successful!");
})();
