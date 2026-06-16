const createContactPage = () => {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");

  const contactHeading = document.createElement("div");
  contactHeading.classList.add("contact-heading");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Booking & Visits";

  const contactText = document.createElement("p");
  contactText.textContent =
    "Join us at the Agora Bistro. Whether a family dinner or a romantic night, our warm and welcoming atmosphere will bring you and your loved ones together in a place where the flavors of Greece come to life. We look forward to welcoming you!";
};
