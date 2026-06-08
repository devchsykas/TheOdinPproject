import heroImage from "../assets/images/hero.jpg";

const content = document.getElementById("content");

const createHomePage = () => {
  // Create the main wrapper container
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  // create the hero section
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero-section");
  heroSection.setAttribute("aria-label", "Hero Section");

  // Create the hero text container
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("hero-title");
  heroTitle.textContent = "Modern Flavors. Ancient Traditions.";

  const heroDescription = document.createElement("p");
  heroDescription.classList.add("hero-description");
  heroDescription.textContent =
    "Experience authentic Greek gathering and culinary art. Fresh ingredients, vibrant flavors, and a warm atmosphere await you at our Agora Bistro. Join us for a taste of the Mediterranean!";

  // Create the hero buttons container
  const heroButtons = document.createElement("div");
  heroButtons.classList.add("hero-buttons");

  const exploreButton = document.createElement("button");
  exploreButton.classList.add("hero-btn");
  exploreButton.id = "explore-menu-btn";
  exploreButton.textContent = "Explore Menu";

  const bookButton = document.createElement("button");
  bookButton.classList.add("hero-btn", "hero-btn-secondary");
  bookButton.id = "book-table-btn";
  bookButton.textContent = "Book Table";

  // Append buttons to the hero buttons container
  heroButtons.appendChild(exploreButton);
  heroButtons.appendChild(bookButton);

  // Append the title, description, and buttons to the hero text container
  heroText.appendChild(heroTitle);
  heroText.appendChild(heroDescription);
  heroText.appendChild(heroButtons);

  // Create the hero image container
  const heroImageContainer = document.createElement("div");
  heroImageContainer.classList.add("hero-image");
  const heroImage = document.createElement("img");

  heroImage.src = heroImage;
  heroImage.alt = "Agora Bistro Interior";

  // Append the image to the hero image container
  heroImageContainer.appendChild(heroImage);

  // Append the hero text and image containers to the hero section
  heroSection.appendChild(heroText);
  heroSection.appendChild(heroImageContainer);

  // Append the hero section to the main wrapper container
  homePage.appendChild(heroSection);

  // Append the main wrapper container to the content div
  content.appendChild(homePage);
};

export default createHomePage;
