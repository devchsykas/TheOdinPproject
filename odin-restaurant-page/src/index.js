import "/src/assets/styles/styles.css";
import createNavbar from "./components/navbar.js";
import createHomePage from "./pages/home.js";

function initWebsite() {
  const content = document.getElementById("content");

  const navbar = createNavbar();
  content.appendChild(navbar);

  const homePage = createHomePage();
  content.appendChild(homePage);
}

initWebsite();
