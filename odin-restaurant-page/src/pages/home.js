import heroImage from "../assets/images/hero.jpg";
import missionImage from "../assets/images/mission.jpg";
import lambKleftikoImage from "../assets/images/lamb-kleftiko.jpg";
import greekSaladImage from "../assets/images/traditional-Greek-salad.jpg";
import galaktompourekoImage from "../assets/images/galaktompoureko.jpg";

const createHomePage = () => {
  // Main page wrapper container
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  // --- HERO SECTION ---
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero-section");
  heroSection.setAttribute("aria-label", "Hero Section");

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

  const exploreButton = document.createElement("button");
  exploreButton.classList.add("hero-btn");
  exploreButton.id = "explore-menu-btn";
  exploreButton.textContent = "Explore Menu";

  const bookButton = document.createElement("button");
  bookButton.classList.add("hero-btn", "hero-btn-secondary");
  bookButton.id = "book-table-btn";
  bookButton.textContent = "Book Table";

  heroButtons.appendChild(exploreButton);
  heroButtons.appendChild(bookButton);
  heroText.appendChild(heroTitle);
  heroText.appendChild(heroDescription);
  heroText.appendChild(heroButtons);

  const heroImageContainer = document.createElement("div");
  heroImageContainer.classList.add("hero-image");

  // ✅ Renamed variable to prevent shadowing the import string path
  const heroImgElement = document.createElement("img");
  heroImgElement.src = heroImage;
  heroImgElement.alt = "Agora Bistro Interior";

  heroImageContainer.appendChild(heroImgElement);
  heroSection.appendChild(heroText);
  heroSection.appendChild(heroImageContainer);
  homePage.appendChild(heroSection);

  // --- MISSION SECTION ---
  const missionSection = document.createElement("section");
  missionSection.classList.add("mission-section");

  const missionImageContainer = document.createElement("div");
  missionImageContainer.classList.add("mission-image");

  const missionImgElement = document.createElement("img");
  missionImgElement.src = missionImage;
  missionImgElement.alt = "";

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

  missionImageContainer.appendChild(missionImgElement);
  missionContent.appendChild(missionTitle);
  missionContent.appendChild(missionSubtitle);
  missionContent.appendChild(missionDescription);
  missionSection.appendChild(missionContent);
  missionSection.appendChild(missionImageContainer);
  homePage.appendChild(missionSection);

  // --- RECOMMENDATIONS SECTION ---
  const recommendationSection = document.createElement("section");
  recommendationSection.classList.add("recommendation-section");

  const recommendationHeading = document.createElement("div");
  recommendationHeading.classList.add("recommendation-heading");

  const recommendationTitle = document.createElement("h2");
  recommendationTitle.textContent = "Chef's Recommendation";

  const recommendationText = document.createElement("p");
  recommendationText.textContent =
    "Our chef's recommendation is a carefully curated selection of Greek meals that will satisfy your cravings and delight your taste buds.";

  recommendationSection.appendChild(recommendationHeading);
  recommendationHeading.appendChild(recommendationTitle);
  recommendationHeading.appendChild(recommendationText);

  const recommendationImageContainer = document.createElement("div");
  recommendationImageContainer.classList.add("recommendation-image-container");

  const recommendations = [
    {
      image: lambKleftikoImage,
      name: "Lamb Kleftiko",
      description:
        "Traditional Greek dish of slow-roasted lamb cooked in parchment paper with potatoes and vegetables.",
    },
    {
      image: greekSaladImage,
      name: "Greek Salad",
      description:
        "A refreshing salad made with tomatoes, cucumbers, onions, olives, and feta cheese, dressed with olive oil and oregano.",
    },
    {
      image: galaktompourekoImage,
      name: "Galaktompoureko",
      description:
        "A delicious Greek dessert made with layers of crispy phyllo dough and a creamy semolina custard, soaked in a fragrant syrup.",
    },
  ];

  recommendations.forEach((recommendation) => {
    const recommendationCard = document.createElement("article");
    recommendationCard.classList.add("recommendation-card");

    recommendationCard.innerHTML = `
      <img src="${recommendation.image}" alt="${recommendation.name}" />
      <div class="recommendation-card-content">
        <h3 class="recommendation-card-title">${recommendation.name}</h3>
        <p class="recommendation-card-description">${recommendation.description}</p>
      </div>
    `;

    recommendationImageContainer.appendChild(recommendationCard);
  });

  recommendationSection.appendChild(recommendationImageContainer);
  homePage.appendChild(recommendationSection);

  return homePage;
};

export default createHomePage;
