import menuData from "../data/menuData.js";

// Filters
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

/**
 *  Function that creates a menu card element
 * @param {*} item - the item to create the menu card
 * @returns - The menu card element
 */
const createMenuCard = (item) => {
  //console.log("the item is", item);

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

/**
 *  Function that creates a filter button element
 * @param {*} filter - the filter to create the button for the menu
 * @param {*} currentActiveCategory - the current active category
 * @param {*} onFilterClick - the function to call when the button is clicked
 * @returns
 */
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

/**
 *  Function that renders the filter buttons for the menu
 * @param {*} container - the container to render the filter buttons in the menu
 * @param {*} activeCategory - the current active category of the menu
 * @param {*} onFilterClick - the function to call when a filter button is clicked in the menu
 */
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

/**
 *  Function that renders the menu list
 * @param {*} container - the container to render the menu list in
 * @param {*} activeCategory - the current active category of the menu
 */
const renderMenuList = (container, activeCategory) => {
  container.innerHTML = "";

  /**
   * - Function to check if an item matches the active filter or not
   * @param {*} item - the item to check if it matches the active filter or not
   * @param {*} activeFilter - the active filter to check if the item matches or not
   * @returns - true if the item matches the active filter, false otherwise
   */
  const matchesFilter = (item, activeFilter) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  };

  // Filter the menu data based on the active filter and render the matching categories and items in the menu list
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

/**
 * Function that creates the menu page element
 * @returns the menu page element
 */
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

  /**
   * Function that handles the filter change event and renders the menu list and filter buttons
   * @param {*} newCategory - the new category to filter the menu list
   */
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
