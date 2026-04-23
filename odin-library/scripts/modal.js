/**
 * The `addBookBtn` and `closeModalBtn` elements are selected from the DOM.
 */
const addBookBtn = document.querySelector(".add-book--btn");
const closeModalBtn = document.getElementById("closeModal");

/* When the `addBookBtn` element is
clicked, this event listener triggers a function that selects the element with the id "addBookModal" from the DOM and removes the "hidden" class from it. This action likely displays a modal or form that was previously hidden from view. */
addBookBtn.addEventListener("click", () => {
  const addBookModal = document.getElementById("addBookModal");
  addBookModal.classList.remove("hidden");
});

/* When the `closeModalBtn` is
clicked, the function inside the event listener is triggered. It selects the element with the id "closeModal" from the DOM and adds the class "hidden" to it. */
closeModalBtn.addEventListener("click", () => {
  //When you click the cancel button close the form
  addBookModal.classList.add("hidden");
});
