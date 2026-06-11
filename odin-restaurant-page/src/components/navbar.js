import logoImage from "../assets/images/logo.svg";

const createNavbar = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const nav = document.createElement("nav");
  nav.classList.add("navbar");
  nav.setAttribute("aria-label", "Main Navigation");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo");

  const logoImageElement = document.createElement("img");
  logoImageElement.classList.add("logo-img");
  logoImageElement.src = logoImage;
  logoImageElement.alt = "Agora Bistro Logo";

  const logoText = document.createElement("h1");
  logoText.classList.add("logo-text");
  logoText.innerHTML = "Agora <span >Bistro</span>";

  const navButtons = document.createElement("div");
  navButtons.classList.add("nav-buttons");

  const homeButton = document.createElement("button");
  homeButton.classList.add("active");
  homeButton.id = "home-btn";
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.id = "menu-btn";
  menuButton.textContent = "Menu";

  const aboutButton = document.createElement("button");
  aboutButton.id = "about-btn";
  aboutButton.textContent = "About";

  const contactButton = document.createElement("button");
  contactButton.id = "contact-btn";
  contactButton.textContent = "Contact";

  logoContainer.append(logoImageElement, logoText);
  navButtons.append(homeButton, menuButton, aboutButton, contactButton);
  nav.append(logoContainer, navButtons);
  header.append(nav);

  return header;
};

export default createNavbar;
