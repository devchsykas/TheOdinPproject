/* Selecting elements from the HTML document using their class names. */
const toggleMenuBtn = document.querySelector(".nav__toggle");
const navSubmenu = document.querySelector(".nav__item--has-submenu");

/**
 * The function `toggleMenu` toggles the class "open" on the element with the class `navSubmenu`.
 */
function toggleMenu() {
  navSubmenu.classList.toggle("open");
}

/* The line `toggleMenuBtn.addEventListener("click", toggleMenu);` is adding an event listener to the
`toggleMenuBtn` element. It specifies that when the `click` event occurs on the `toggleMenuBtn`
element, the `toggleMenu` function should be executed. In this case, clicking on the `toggleMenuBtn`
will toggle the class "open" on the `navSubmenu` element. */
toggleMenuBtn.addEventListener("click", toggleMenu);
