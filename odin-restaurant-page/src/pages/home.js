import heroImage from "../assets/images/hero.jpg";

const content = document.getElementById("content");

const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero-section");

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("hero-title");
  heroTitle.textContent = "Modern Flavors. Ancient Traditions.";

  const heroDescription = document.createElement("p");
  heroDescription.classList.add("hero-description");
  heroDescription.textContent =
    "Experience authentic Greek gathering and culinary art. Fresh ingredients, vibrant flavors, and a warm atmosphere await you at our Agora Bistro. Join us for a taste of the Mediterranean!";

  const heroButtons = document.createElement("div");
  heroButtons.classList.add("hero-buttons");

  const heroButton = document.createElement("button");
  heroButton.classList.add("hero-btn");
  heroButton.id = "explore-menu-btn";
  heroButton.textContent = "Explore Menu";

  const reserveButton = document.createElement("button");
  reserveButton.classList.add("hero-btn", "hero-btn-secondary");
  reserveButton.id = "reserve-table-btn";
  reserveButton.textContent = "Book Table";

  heroButtons.appendChild(heroButton);
  heroButtons.appendChild(reserveButton);

  heroText.appendChild(heroTitle);
  heroText.appendChild(heroDescription);
  heroText.appendChild(heroButtons);

  const heroImageContainer = document.createElement("div");
  heroImageContainer.classList.add("hero-image");
  const heroImage = document.createElement("img");

  heroImage.src = heroImage;
  heroImage.alt = "Agora Bistro Interior";

  heroImageContainer.appendChild(heroImage);

  heroSection.appendChild(heroText);
  heroSection.appendChild(heroImageContainer);

  homePage.appendChild(heroSection);

  content.appendChild(homePage);
};

export default createHomePage;
