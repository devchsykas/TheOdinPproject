import menuData from "../data/menuData.js";

const createMenuPage = () => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  menuSection.setAttribute("aria-label", "Menu Section");

  const menuHeading = document.createElement("div");
  menuHeading.classList.add("menu-heading");

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Taste of Tradition";

  const menuIntro = document.createElement("p");
  menuIntro.textContent =
    "Welcome to our table, where every dish tells a story. From sun-ripened Mediterranean vegetables and hand-pressed extra virgin olive oil to slow-cooked family recipes passed down through generations, we invite you to experience the true essence of authentic Greek hospitality.";

  menuHeading.appendChild(menuTitle);
  menuHeading.appendChild(menuIntro);
  menuSection.appendChild(menuHeading);

  return menuSection;
};

export default createMenuPage;
