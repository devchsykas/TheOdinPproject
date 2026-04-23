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
  return {
    image: document.getElementById("image").files[0] || null,
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
  library.push(book);
  console.log(`Book added to library: ${book.title}`);
}

/**
 * The function `deleteBook` removes a specified book from a library array and then triggers a rendering function.
 * @param book - The book object to be deleted from the library.
 */
function deleteBook(index) {
  library.splice(index, 1);
  //renderBooks();
}

function editBook(book) {}

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
  const formData = getFormData();
  const book = createBook(formData);
  addBookToLibrary(book);
  renderBooks();
}

/**
 * The function `handleDeleteClick` is triggered when a delete button is clicked. It removes the corresponding book from the library array and then re-renders the books.
 * @param {*} event - the event object that triggered the function
 */
function handleDeleteClick(event) {
  const index = event.target.dataset.index;
  deleteBook(index);
  renderBooks();
}

/**
 * Event listener for the form submit event. When the form is submitted, the function `handleFormSubmit` is triggered.
 * @param event - the event object that triggered the function
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log("Form submitted without reloading!");
  handleFormSubmit();
});

/**
 * Event listener for the click event on the table body. When a delete button is clicked, the function `handleDeleteClick` is triggered.
 * @param e - the event object that triggered the function
 */
tbody.addEventListener("click", (e) => {
  //console.log("clicked", e.target);
  if (e.target.classList.contains("delete--btn")) {
    const index = e.target.dataset.index;
    //console.log(index);
    const confirmDelete = confirm("Are you sure you want to delete this book?");

    if (confirmDelete) {
      deleteBook(index);
      renderBooks();
    }
  }
});
