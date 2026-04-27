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

// Event listeners
addBookBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", handleEscapeKey);
