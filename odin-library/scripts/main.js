"use strict";

/**
 * This is the main JS file for the library management system.
 */

/**
 * Elements "form", "tbody", are selected from the DOM.
 */
const form = document.getElementById("bookForm");
const tbody = document.querySelector("tbody");

/* This array will be used to store instances of the `Book` objects in the
library management system. */
const library = [];

// Variable to store the index of the book being edited
let editIndex = null;

/**
 * The function `Book` creates a new instance of the `Book` class.
 * @param {*} image - The image of the book
 * @param {*} id - The ID of the book
 * @param {*} title - The title of the book
 * @param {*} isbn - The ISBN number of the book
 * @param {*} author - The author of the book
 * @param {*} publisher - The publisher of the book
 * @param {*} category - The category of the book
 * @param {*} rack - The rack number of the book
 * @param {*} numOfCopies - The number of copies of the book
 * @param {*} status - The status of the book
 */
function Book(
  image,
  id,
  title,
  isbn,
  author,
  publisher,
  category,
  rack,
  numOfCopies,
  status,
) {
  this.image = image;
  this.id = id;
  this.title = title;
  this.isbn = isbn;
  this.author = author;
  this.publisher = publisher;
  this.category = category;
  this.rack = rack;
  this.numOfCopies = numOfCopies;
  this.status = status;
}

/**
 * The function `getFormData` returns an object with the values of various form elements.
 * @returns An object with the values of various form elements.
 */
function getFormData() {
  // Get the form data from the DOM elements
  const fileInput = document.getElementById("image");

  // Return an object with the form data
  return {
    image: fileInput.files[0] || null,
    // id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    isbn: document.getElementById("isbn").value,
    author: document.getElementById("author").value,
    publisher: document.getElementById("publisher").value,
    category: document.getElementById("category").value,
    rack: document.getElementById("rack").value,
    numOfCopies: document.getElementById("numOfCopies").value,
    status: document.getElementById("status").value,
  };
}

/**
 * The function `createBook` creates a new book object based on the provided data.
 * @param {*} data - The data object containing book information.
 * @returns - A new instance of the `Book` class.
 */
function createBook(data) {
  // Create a new book object with the provided data
  return new Book(
    data.image,
    data.id,
    data.title,
    data.isbn,
    data.author,
    data.publisher,
    data.category,
    data.rack,
    data.numOfCopies,
    data.status,
  );
}

/**
 * The function `addBookToLibrary` adds a book to a library array.
 * @param book - The book object to be added to the library.
 */
function addBookToLibrary(book) {
  // Add the book to the library array
  library.push(book);
  console.log(`Book added to library: ${book.title}`);
}

/**
 * The function `deleteBook` removes a specified book from a library array and then triggers a rendering function.
 * @param book - The book object to be deleted from the library.
 */
function deleteBook(index) {
  // Get the book to be deleted from the library array at the specified index
  const deletedBook = library[index];
  // Remove the book from the library array
  library.splice(index, 1);
  console.log(`Book deleted from Library: ${deletedBook.title}`);
  renderBooks();
}
/**
 * The function `editBook` updates a book object in a library array.
 * @param {*} index - The index of the book to be updated
 * @param {*} updatedBook - The updated book object
 */
function editBook(index, updatedBook) {
  // Update the book in the library array at the specified index
  library[index] = updatedBook;
}

/**
 * The `renderBooks` function dynamically populates a table with book information from a library array.
 */
function renderBooks() {
  //Clear the table
  tbody.innerHTML = "";
  // Loop through the library array
  library.forEach((book, index) => {
    // Create a new row for each book
    const row = document.createElement("tr");
    // Populate the row with book data
    row.innerHTML = `
      <td><img src="${book.image}" alt="${book.title}"></td>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.isbn}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>${book.category}</td>
      <td>${book.rack}</td>
      <td>${book.numOfCopies}</td>
      <td>${book.status}</td>
      <td>
        <button class="btn edit--btn" data-index="${index}">Edit</button>
        <button class="btn delete--btn" data-index="${index}">Delete</button>
      </td>
    `;
    // Append the row to the end of the table body
    tbody.appendChild(row);
  });
}

/**
 * The function `handleFormSubmit` is triggered when the form is submitted. It gets the form data, creates a book object, adds the book to the library array, and then renders the books.
 * @returns The function does not return anything.
 */
function handleFormSubmit() {
  // Get the form data from the DOM elements
  const formData = getFormData();
  // Create a new book object from the form data
  const book = createBook(formData);
  // Add the book to the library array
  addBookToLibrary(book);
  // Render the books
  renderBooks();
}

/**
 * The function `handleDeleteClick` is triggered when a delete button is clicked. It removes the corresponding book from the library array and then re-renders the books.
 * @param {*} event - the event object that triggered the function
 */
function handleDeleteClick(event) {
  // Get the index of the book to be deleted from the event target dataset index property
  const index = event.target.dataset.index;
  // Remove the book from the library array at the specified index
  deleteBook(index);
  // Re-render the books
  renderBooks();
}

/**
 * The function `handleEditClick` populates a form with book data based on the index provided and displays a modal for editing.
 * @param index - Used to identify the position of the book in the `library` array that needs to be edited. It helps in retrieving the specific book object from the `library` array so that its data can be populated in the form for editing
 */
function handleEditClick(index) {
  // Get the book to be edited from the library array at the specified index
  const book = library[index];
  // Store the index of the book being edited globally for later use in the `handleFormSubmit` function
  editIndex = index;

  // Populate the form with the book data
  //document.getElementById("image").value = book.image;
  //document.getElementById("id").value = book.id;
  document.getElementById("title").value = book.title;
  document.getElementById("isbn").value = book.isbn;
  document.getElementById("author").value = book.author;
  document.getElementById("publisher").value = book.publisher;
  document.getElementById("category").value = book.category;
  document.getElementById("rack").value = book.rack;
  document.getElementById("numOfCopies").value = book.numOfCopies;
  document.getElementById("status").value = book.status;

  // Show the modal for editing the book
  addBookModal.classList.remove("hidden");
}

/**
 * Event listener for the form submit event. When the form is submitted, the function `handleFormSubmit` is triggered.
 * @param event - the event object that triggered the function
 */
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior to prevent the page from reloading when the form is submitted
  event.preventDefault();
  //console.log("Form submitted without reloading!");
  // handleFormSubmit();
  // Get the form data from the form elements on the page
  const formData = getFormData();
  // Get the image file from the form data
  let image = formData.image;

  // If we are editing a book, use the existing image if no new image is provided
  if (editIndex !== null && !image) {
    image = library[editIndex].image;
  }

  // Override formData image before creating the book object with the new image file
  formData.image = image;

  // Create a new book object from the form data and image file
  const book = createBook(formData);

  // If we are editing a book, update the book in the library array
  if (editIndex !== null) {
    editBook(editIndex, book);
    editIndex = null;
  } else {
    addBookToLibrary(book);
  }

  // Render the books
  renderBooks();
  // Reset the form elements
  form.reset();
  // Close the modal
  addBookModal.classList.add("hidden");
});

/**
 * Event listener for the click event on the table body. When a delete button is clicked, the function `handleDeleteClick` is triggered.
 * @param e - the event object that triggered the function
 */
tbody.addEventListener("click", (e) => {
  //console.log("clicked", e.target);
  // Get the index of the book
  const index = e.target.dataset.index;
  // If the clicked element has the class "edit--btn", call the `handleEditClick` function with the index as an argument
  if (e.target.classList.contains("edit--btn")) {
    handleEditClick(index);
  }

  // If the clicked element has the class "delete--btn", show a confirmation dialog
  if (e.target.classList.contains("delete--btn")) {
    //console.log(index);
    const confirmDelete = confirm("Are you sure you want to delete this book?");

    // If the user confirms the deletion, call the `deleteBook` function with the index as an argument and re-render the books
    if (confirmDelete) {
      deleteBook(index);
      renderBooks();
    }
  }
});
