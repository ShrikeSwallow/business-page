const container = document.createElement("div");
const headline = document.createElement("h1");
headline.textContent = "About Us";
const subheadline = document.createElement("h2");
subheadline.textContent = "Your Local Printing Experts";
const copy = document.createElement("p");
copy.textContent = `We are a dedicated team of printing professionals, committed to bringing your visions to life with precision and care. With years of experience and state-of-the-art equipment, we ensure every project is a masterpiece.`;
const contactUs = document.createElement("h2");
contactUs.textContent = "Contact Us";
const contactCopy = document.createElement("p");
contactCopy.textContent = `Need assistance with your print project? Our friendly team is here to help. Reach out to us for a free consultation and quote.`;

container.appendChild(headline);
container.appendChild(subheadline);
container.appendChild(copy);
container.appendChild(contactUs);
container.append(contactCopy);

export { container };
