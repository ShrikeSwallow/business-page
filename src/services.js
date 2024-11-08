const headline = document.createElement("h1");
headline.textContent = "Services";
const subheadline = document.createElement("h2");
subheadline.textContent = "What We Offer";
const list = document.createElement("ul");
const listItems = [
  `Business Printing: Professional business cards, brochures, and stationery.`,
  `Custom Printing: Personalized prints, including invitations, posters, and promotional items.`,
  `Large Format Printing: High-quality banners, signs, and exhibition displays.`,
  `Digital Printing: Fast and flexible digital printing solutions for all your needs.`,
];
listItems.forEach((listItem) => {
  const item = document.createElement("li");
  item.textContent = listItem;
  list.appendChild(item);
});

export { headline, subheadline, list };
