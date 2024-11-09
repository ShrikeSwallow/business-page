const container = document.createElement("div");
/*const headline = document.createElement("h1");
headline.textContent = "Our Printing Services";
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

container.appendChild(headline);
container.appendChild(subheadline);
container.appendChild(list);*/
container.innerHTML = `<h1>Our Printing Services</h1>
<p>At MK Print Shop, we offer a comprehensive range of printing services designed to meet your unique needs. Our state-of-the-art equipment and skilled team ensure that every project is completed with the highest level of quality and precision.</p>

<h2>Business Printing</h2>
<ul>
<li><strong>Business Cards:</strong> Make a lasting impression with custom-designed business cards that reflect your brand's identity.</li>

<li><strong>Brochures & Flyers:</strong> Effectively communicate your message with professionally printed brochures and flyers.</li>

<li><strong>Stationery:</strong> Elevate your business communications with personalized letterheads, envelopes, and notepads.</li>
</ul>
<h2>Marketing Materials</h2>
<ul>
<li><strong>Posters & Banners:</strong> Grab attention with vibrant posters and banners for events, promotions, and more.</li>

<li><strong>Promotional Products:</strong> Enhance your brand visibility with custom-printed promotional items like mugs, pens, and tote bags.</li>

<li><strong>Direct Mail:</strong> Reach your target audience with high-quality direct mail printing services.</li>
</ul>
<h2>Custom Printing</h2>
<ul>
<li><strong>Invitations & Greeting Cards:</strong> Celebrate special occasions with beautifully crafted invitations and greeting cards.</li>

<li><strong>Photo Books & Calendars:</strong> Preserve your memories with custom photo books and calendars.</li>

<li><strong>Canvas Prints & Wall Art:</strong> Transform your photos into stunning wall art with our canvas printing services.</li>
</ul>
<h3>Eco-Friendly Printing Options</h3> <p>We are committed to sustainability and offer eco-friendly printing options, including recycled paper and vegetable-based inks. Ask us about our green printing solutions for your next project.</p>

<h3>Consultation & Design Services</h3> <p>Need help with your design? Our experienced team offers consultation and design services to ensure your project looks perfect from start to finish.</p>

<p class="cta">Ready to start your next printing project? Contact us today to discuss your requirements and receive a free quote.</p>`;

export { container };
