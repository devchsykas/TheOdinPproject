import logoImage from "../assets/images/logo.svg";

const createNavbar = () => {
  const header = createElement("header");
  header.classList.add("header");

  const nav = createElement("nav");
  nav.classList.add("navbar");
  nav.setAttribute("aria-label", "Main Navigation");

  const logoContainer = createElement("div");
  logoContainer.classList.add("logo");

  const logoImageElement = createElement("img");
  logoImageElement.classList.add("logo-img");
  logoImageElement.src = logoImage;
  logoImageElement.alt = "Agora Bistro Logo";

  const logoText = createElement("h1");
  logoText.classList.add("logo-text");
  logoText.textContent = "Agora";
  const logoSubtext = createElement("span");
  logoSubtext.textContent = "Bistro";

  const navButtons = createElement("div");
  navButtons.classList.add("nav-buttons");

  const homeButton = createElement("button");
  homeButton.classList.add("active");
  homeButton.id = "home-btn";
  homeButton.textContent = "Home";

  const menuButton = createElement("button");
  menuButton.id = "menu-btn";
  menuButton.textContent = "Menu";

  const aboutButton = createElement("button");
  aboutButton.id = "about-btn";
  aboutButton.textContent = "About";

  const contactButton = createElement("button");
  contactButton.id = "contact-btn";
  contactButton.textContent = "Contact";

  logoContainer.append(logoImageElement, logoText, logoSubtext);
  navButtons.append(homeButton, menuButton, aboutButton, contactButton);
  nav.append(logoContainer, navButtons);
  header.append(nav);

  return header;
};

export default createNavbar;
