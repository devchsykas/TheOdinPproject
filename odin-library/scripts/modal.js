"use strict";

const addBookBtn = document.querySelector(".add-book--btn");
const addBookModalBtn = document.getElementById("addBookModal");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
  addBookModalBtn.classList.remove("hidden");
}

function closeModal() {
  addBookModalBtn.classList.add("hidden");
}

function handleEscapeKey(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

// console.log(addBookBtn);
addBookBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", handleEscapeKey);
