import aboutImage from "../assets/images/hero.jpg";

const createAboutPage = () => {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-section");

  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "Our Story & Meraki";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Agora Bistro was born from a desire to recreate the bustling energy of ancient Greek markets where food, community and conversation seamlessly flowed.";

  const anotherAboutText = document.createElement("p");
  anotherAboutText.textContent =
    "We source our ingredients from family-owned olive groves and local fishermen to bring pure Mediterranean magic to your table.";

  const aboutImageContainer = document.createElement("div");
  aboutImageContainer.classList.add("about-image-container");

  const aboutImageElement = document.createElement("img");
  aboutImageElement.src = aboutImage;
  aboutImageElement.alt = "About Us Image";

  aboutHeading.appendChild(aboutTitle);
  aboutHeading.appendChild(aboutText);
  aboutHeading.appendChild(anotherAboutText);
  aboutImageContainer.appendChild(aboutImageElement);
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutImageContainer);

  return aboutSection;
};

export default createAboutPage;
