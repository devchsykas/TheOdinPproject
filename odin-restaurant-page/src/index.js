import "/src/assets/styles/styles.css";
import createHomePage from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  content.appendChild(createHomePage());
});
