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
  console.log("the item is", item);

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

  menuCardHeader.appendChild(menuCardTitle);
  menuCardHeader.appendChild(menuCardPrice);
  menuCardBody.appendChild(menuCardHeader);
  menuCardBody.appendChild(menuCardDescription);
  menuCard.appendChild(menuCardImage);
  menuCard.appendChild(menuCardBody);

  return menuCard;
};

const createFilterButton = (filter, currentActiveCategory, onFilterClick) => {
  const button = document.createElement("button");
  button.classList.add("filter-btn");
  button.id = filter.value;
  button.type = "button";
  button.textContent = filter.label;

  if (filter.value === currentActiveCategory) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    onFilterClick(filter.value);
  });

  return button;
};

const renderFilterButtons = (container, activeCategory, onFilterClick) => {
  container.innerHTML = "";

  menuFilters.forEach((filter) => {
    const btnElement = createFilterButton(
      filter,
      activeCategory,
      onFilterClick,
    );
    container.appendChild(btnElement);
  });
};

const renderMenuList = (container, activeCategory) => {
  container.innerHTML = "";

  const matchesFilter = (item, activeFilter) => {
    if (activeFilter === "all") return true;
    return item.title === activeFilter;
  };

  const matchingCategories = menuData
    .map((category) => ({
      ...category,
      items: category.items
        ? category.items.filter((item) => matchesFilter(item, activeCategory))
        : [],
    }))
    .filter((category) => category.items.length > 0);

  matchingCategories.forEach((category) => {
    const categorySection = document.createElement("section");
    categorySection.classList.add("menu-category");

    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("menu-category-header");

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.title;

    const categoryNote = document.createElement("p");
    categoryNote.textContent = category.note;

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    category.items.forEach((item) => {
      menuGrid.appendChild(createMenuCard(item));
    });

    categoryHeader.appendChild(categoryTitle);
    if (category.note) {
      categoryHeader.appendChild(categoryNote);
    }

    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(menuGrid);

    container.appendChild(categorySection);
  });
};

const createMenuPage = () => {
  let activeCategory = "all";

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

  menuHeading.appendChild(menuTitle);
  menuHeading.appendChild(menuIntro);

  const menuFilters = document.createElement("div");
  menuFilters.classList.add("menu-filters");

  const menuFilterHeading = document.createElement("p");
  menuFilterHeading.textContent = "Filter Menu";

  const menuFilterButtons = document.createElement("div");
  menuFilterButtons.classList.add("menu-filter-buttons");

  menuFilters.appendChild(menuFilterHeading);
  menuFilters.appendChild(menuFilterButtons);

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuSection.appendChild(menuHeading);
  menuSection.appendChild(menuFilters);
  menuSection.appendChild(menuList);

  const handleFilterChange = (newCategory) => {
    activeCategory = newCategory;
    renderFilterButtons(menuFilterButtons, activeCategory, handleFilterChange);
    renderMenuList(menuList, activeCategory);
  };

  renderFilterButtons(menuFilterButtons, activeCategory, handleFilterChange);
  renderMenuList(menuList, activeCategory);

  return menuSection;
};

export default createMenuPage;
