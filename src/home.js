const container = document.createElement("div");
const headline = document.createElement("h1");
headline.textContent = "Welcome to MK Print Shop!";

const copy = document.createElement("p");
copy.textContent = `Your one-stop destination for all your printing needs! At MK Print Shop, we pride ourselves on delivering high-quality printing services with a personal touch. Whether you're looking for professional business materials, eye-catching marketing collateral, or unique custom prints, we've got you covered.`;

const subheadline = document.createElement("h2");
subheadline.textContent = "Why Choose Us?";

const list = document.createElement("ul");
const listItems = [
  `Expertise: With years of experience in the printing industry, our skilled team is dedicated to bringing your vision to life.`,
  `Quality: We use the latest printing technology and premium materials to ensure top-notch results every time.`,
  `Customer Service: Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.`,
  `Fast Turnaround: We know time is of the essence. Our efficient processes ensure that your projects are completed on time, every time.`,
  `Eco-Friendly: We are committed to sustainable practices and offer eco-friendly printing options to reduce our environmental impact.`,
];
listItems.forEach((listItem) => {
  const item = document.createElement("li");
  item.textContent = listItem;
  list.appendChild(item);
});

const cta = document.createElement("p");
cta.classList.add("cta");
cta.textContent = `Get Started Today! Ready to bring your ideas to life? Contact us now to discuss your project or request a free quote. Our friendly team is here to help you every step of the way.`;

container.appendChild(headline);
container.appendChild(copy);
container.appendChild(subheadline);
container.appendChild(list);
container.appendChild(cta);

export { container };
