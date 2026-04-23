"use strict";

/**
 * This is the Modal JS file for the library management system.
 */

/**
 * Selecting elements "addBookBtn", "addBookModalBtn", and "closeModalBtn" from the DOM.
 */
const addBookBtn = document.querySelector(".add-book--btn");
const addBookModalBtn = document.getElementById("addBookModal");
const closeModalBtn = document.getElementById("closeModal");

/**
 * The function `openModal` removes the "hidden" class from the element with the class name `addBookModalBtn`, presumably making it visible.
 */
function openModal() {
  addBookModalBtn.classList.remove("hidden");
}

/**
 * The function closeModal hides the addBookModalBtn element by adding the "hidden" class to it.
 */
function closeModal() {
  addBookModalBtn.classList.add("hidden");
}

/**
 * The function `handleEscapeKey` listens for the Escape key press event and calls the `closeModal`
 * function when the Escape key is pressed.
 * @param e - The parameter `e` in the `handleEscapeKey` function is typically an event object that
 * represents a key press event. In this case, the function is checking if the key that was pressed is
 * the "Escape" key, and if so, it calls the `closeModal` function.
 */
function handleEscapeKey(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

/* The line `addBookBtn.addEventListener("click", openModal);` is adding an event listener to the
`addBookBtn` element. It listens for a "click" event on the `addBookBtn` element, and when the click
event occurs, it calls the `openModal` function. This means that when the user clicks on the
`addBookBtn`, the `openModal` function will be executed, removing the "hidden" class from the
`addBookModalBtn` element and making it visible. */
addBookBtn.addEventListener("click", openModal);

/* The line `closeModalBtn.addEventListener("click", closeModal);` is adding an event listener to the
`closeModalBtn` element. It listens for a "click" event on the `closeModalBtn` element, and when the
click event occurs, it calls the `closeModal` function. This means that when the user clicks on the
`closeModalBtn`, the `closeModal` function will be executed, adding the "hidden" class to the
`addBookModalBtn` element and hiding it. */
closeModalBtn.addEventListener("click", closeModal);

/* The line `document.addEventListener("keydown", handleEscapeKey);` is adding an event listener to the
entire document. It listens for a "keydown" event, which is triggered when a key is pressed, and
when this event occurs, it calls the `handleEscapeKey` function. */
document.addEventListener("keydown", handleEscapeKey);
