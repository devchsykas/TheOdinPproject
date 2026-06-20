import menuData from "../data/menuData.js";

const menuFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Starters",
    value: "starters",
  },
  {
    label: "Greek Dishes",
    value: "greek-dishes",
  },
  {
    label: "Grill Dishes",
    value: "grill-dishes",
  },
  {
    label: "Seafood Dishes",
    value: "seafood-dishes",
  },
  {
    label: "Desserts",
    value: "desserts",
  },
];

const createMenuCard = (item) => {
  const menuCard = document.createElement("article");
  menuCard.classList.add("menu-card");

  const menuCardImage = document.createElement("img");
  menuCardImage.classList.add("menu-card-image");
  menuCardImage.src = item.image;
  menuCardImage.alt = item.name;

  const menuCardBody = document.createElement("div");
  menuCardBody.classList.add("menu-card-body");

  const menuCardHeader = document.createElement("div");
  menuCardHeader.classList.add("menu-card-header");

  const menuCardTitle = document.createElement("h4");
  menuCardTitle.textContent = item.name;

  const menuCardPrice = document.createElement("span");
  menuCardPrice.textContent = item.price;

  const menuCardDescription = document.createElement("p");
  menuCardDescription.textContent = item.description;

  menuCardHeader.appendChild("menuCardTitle");
  menuCardHeader.appendChild("menuCardPrice");
  menuCardBody.appendChild("menuCardDescription");
  menuCardBody.appendChild("menuCardHeader");
  menuCard.appendChild("menuCardBody");
  menuCard.appendChild("menuCardImage");

  return menuCard;
};

const createFilterButton = (filter, onFilterClick) => {
  const button = document.createElement("button");
  button.classList.toggle("active", filter.value === "all");
  button.type = "button";
  button.textContent = filter.label;
  button.dataset.filter = filter.value;
  button.addEventListener("click", () => {
    onFilterClick(filter.value);
  });

  return button;
};

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
    "Welcome to our table, where every dish tells a story. We invite you to experience the true essence of authentic Greek hospitality.";

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  const menuFilters = document.createElement("div");
  menuFilters.classList.add("menu-filters");

  const menuFilterHeading = document.createElement("p");
  menuFilterHeading.textContent = "Filter Menu";

  const menuFilterButtons = document.createElement("div");
  menuFilterButtons.classList.add("menu-filter-buttons");

  menuHeading.appendChild(menuTitle);
  menuHeading.appendChild(menuIntro);
  menuFilters.appendChild(menuFilterHeading);
  menuFilters.appendChild(menuFilterButtons);
  menuSection.appendChild(menuHeading);
  menuSection.appendChild(menuFilters);
  menuSection.appendChild(menuList);

  return menuSection;
};

export default createMenuPage;
