import "/src/assets/styles/styles.css";
import createNavbar from "./components/navbar.js";
import createHomePage from "./pages/home.js";
import createAboutPage from "./pages/about.js";
import createContactPage from "./pages/contact.js";
import createFooter from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  // Get reference to the main content area
  let mainContentArea;

  /**
   * The function `switchTab` clears existing content in the main content area and appends new page
   * content.
   * @param pageElement - The `pageElement` parameter in the `switchTab` function is the element that
   * represents the content of the page that you want to switch to. This element will be appended to the
   * `mainContentArea` to display the new page content.
   */
  function switchTab(pageElement) {
    // Get reference to the main content area and check if it exists
    if (!mainContentArea) {
      return;
    }
    // Clear existing content
    mainContentArea.innerHTML = "";
    // Append new page content
    mainContentArea.appendChild(pageElement);
  }

  /**
   * The setupNavigation function sets up click event listeners for navigation buttons to switch between
   * different pages on a website.
   */
  function setupNavigation() {
    // Get references to navigation buttons
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const aboutBtn = document.getElementById("about-btn");
    const contactBtn = document.getElementById("contact-btn");

    // Add click event listeners to navigation buttons
    if (homeBtn) {
      homeBtn.addEventListener("click", () => {
        // Switch to the home page
        switchTab(createHomePage());
      });
    }

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        // Switch to the menu page
        switchTab(createMenuPage());
      });
    }

    if (aboutBtn) {
      aboutBtn.addEventListener("click", () => {
        // Switch to the about page
        switchTab(createAboutPage());
      });
    }

    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        // Switch to the contact page
        switchTab(createContactPage());
      });
    }
  }

  /**
   * The function `initWebsite` initializes a website by creating a navbar, home page content, and a
   * footer.
   */
  function initWebsite() {
    // Get reference to the main content area
    const content = document.getElementById("content");
    // Check if the content element exists
    if (!content) {
      return;
    }

    // Create and append the navbar
    const navbar = createNavbar();
    content.appendChild(navbar);

    // Create and append the main content area
    mainContentArea = document.createElement("div");
    mainContentArea.id = "page-content";
    content.appendChild(mainContentArea);

    // Create and append the home page
    const homePage = createHomePage();
    content.appendChild(homePage);

    // Create and append the footer
    const footer = createFooter();
    content.appendChild(footer);

    // Switch to the home page
    switchTab(homePage);
    // Set up navigation
    setupNavigation();
  }

  // Initialize the website
  initWebsite();
});
