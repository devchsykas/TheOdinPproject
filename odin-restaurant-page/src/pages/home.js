import heroImage from "../assets/images/hero.jpg";
import lambKleftiko from "../assets/images/lamb-kleftiko.jpg";
import greekSalad from "../assets/images/traditional-Greek-salad.jpg";
import galaktompoureko from "../assets/images/galaktompoureko.jpg";

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

  // Create the mission section
  const missionSection = document.createElement("section");
  missionSection.classList.add("mission-section");

  // create the mission content container
  const missionContent = document.createElement("div");
  missionContent.classList.add("mission-content");

  const missionTitle = document.createElement("h2");
  missionTitle.classList.add("mission-title");
  missionTitle.textContent = "Our Mission";

  const missionSubtitle = document.createElement("p");
  missionSubtitle.classList.add("mission-subtitle");
  missionSubtitle.textContent =
    "We are passionate about Greek cuisine with a modern twist.";

  const missionDescription = document.createElement("p");
  missionDescription.classList.add("mission-description");
  missionDescription.textContent =
    "At Agora Bistro, we believe in the power of good food to bring people together. Our mission is to create a warm and inviting atmosphere that celebrates the rich culinary heritage of Greece while embracing contemporary flavors and techniques.";

  // Append the title, subtitle, and description to the mission content container
  missionContent.appendChild(missionTitle);
  missionContent.appendChild(missionSubtitle);
  missionContent.appendChild(missionDescription);

  // Append the mission content container to the mission section
  missionSection.appendChild(missionContent);

  // Append the hero section to the main wrapper container
  homePage.appendChild(heroSection);
  // Append the mission section to the main wrapper container
  homePage.appendChild(missionSection);

  // create the recommendations section
  const recommendationSection = document.createElement("section");
  recommendationSection.classList.add("recommendation-section");

  const recommendationHeading = document.createElement("h2");
  recommendationHeading.classList.add("recommendation-heading");
  recommendationHeading.textContent = "Chef's Recommendation";

  const recommendationText = document.createElement("p");
  recommendationText.textContent =
    "Our chef\'s recommendation is a carefully curated selection of Greek meals that will satisfy your cravings and delight your taste buds.";

  // Append the heading and text to the recommendation section
  recommendationSection.appendChild(recommendationHeading);
  recommendationSection.appendChild(recommendationText);

  // Create the recommendation image container
  const recommendationImageContainer = document.createElement("div");
  recommendationImageContainer.classList.add("recommendation-image-container");

  const recommendations = [
    {
      image: lambKleftiko,
      name: "Lamb Kleftiko",
      description:
        "Traditional Greek dish of slow-roasted lamb cooked in parchment paper with potatoes and vegetables.",
    },
    {
      image: greekSalad,
      name: "Greek Salad",
      description:
        "A refreshing salad made with tomatoes, cucumbers, onions, olives, and feta cheese, dressed with olive oil and oregano.",
    },
    {
      image: galaktompoureko,
      name: "Galaktompoureko",
      description:
        "A delicious Greek dessert made with layers of crispy phyllo dough and a creamy semolina custard, soaked in a fragrant syrup.",
    },
  ];

  recommendations.forEach((recommendation) => {
    const recommendationCard = document.createElement("article");
    recommendationCard.classList.add("recommendation-card");
    recommendationCard.innerHTML = `<img src="${recommendation.image}" alt="${recommendation.name}" />
    <div class="recommendation-card-content">
      <h3 class="recommendation-card-title">${recommendation.name}</h3>
      <p class="recommendation-card-description">${recommendation.description}</p>
    </div>
    `;

    recommendationImageContainer.appendChild(recommendationCard);
  });

  // Append the recommendation image container to the recommendation section
  recommendationSection.appendChild(recommendationImageContainer);

  // Append the recommendation section to the main wrapper container
  homePage.appendChild(recommendationSection);

  // Append the main wrapper container to the content div
  content.appendChild(homePage);

  return homePage;
};

export default createHomePage;
