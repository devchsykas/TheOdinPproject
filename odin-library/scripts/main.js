"use strict";

/**
 * This is the main JS file for the library management system.
 */

/**
 * Elements with the id "bookForm", "editBookBtn", and "deleteBookBtn" is selected from the DOM.
 */
const form = document.getElementById("bookForm");
const tbody = document.querySelector("tbody");
// const editBookBtn = document.querySelector(".btn--info");
// const deleteBookBtn = document.querySelector(".btn--danger");

/* This array will be used to store instances of the `Book` objects in the
library management system. */
const library = [];

/**
 * The function `Book` creates a book object with properties such as title, ISBN, author, publisher,
 * category, rack, copies, status, and image.
 * @param title
 * @param isbn
 * @param author
 * @param publisher
 * @param category
 * @param rack
 * @param copies
 * @param status
 * @param image
 */
function Book(
  title,
  isbn,
  author,
  publisher,
  category,
  rack,
  numOfCopies,
  status,
  image,
) {
  this.title = title;
  this.isbn = isbn;
  this.author = author;
  this.publisher = publisher;
  this.category = category;
  this.rack = rack;
  this.numOfCopies = numOfCopies;
  this.status = status;
  this.image = image;
}

/**
 * The function `addBookToLibrary` adds a book to a library array.
 * @param book
 */
function addBookToLibrary(book) {
  library.push(book);
  console.log(`Book added to library: ${book.title}`);
}

/**
 * The `renderBooks` function dynamically populates a table with book information from a library array.
 */
function renderBooks() {
  // Select the tbody element of the table
  const tbody = document.querySelector("tbody");
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
        <button class="btn edit--btn">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    // Append the row to the end of the table body
    tbody.appendChild(row);
  });
}

function editBook(book) {}

/**
 * The function `deleteBook` removes a specified book from a library array and then triggers a
 * rendering function.
 * @param book
 */
function deleteBook(book) {
  library.splice(library.indexOf(book), 1);
  renderBooks();
}

/**
 * Event listener for the form submission.
 */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log("Form submitted without reloading!");
  const title = document.getElementById("title").value;
  const isbn = document.getElementById("isbn").value;
  const author = document.getElementById("author").value;
  const publisher = document.getElementById("publisher").value;
  const category = document.getElementById("category").value;
  const rack = document.getElementById("rack").value;
  const numOfCopies = document.getElementById("numOfCopies").value;
  const status = document.getElementById("status").value;
  const image = document.getElementById("image").files[0];

  // console.log(
  //   title,
  //   isbn,
  //   author,
  //   publisher,
  //   category,
  //   rack,
  //   numOfCopies,
  //   status,
  //   image,
  // );

  const book = new Book(
    title,
    isbn,
    author,
    publisher,
    category,
    rack,
    numOfCopies,
    status,
    image,
  );

  console.log(book);

  addBookToLibrary(book);
  renderBooks();
});

tbody.addEventListener("click", (e) => {
  console.log("clicked", e.target);
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    console.log(index);
    const confirmDelete = confirm("Are you sure you want to delete this book?");

    if (confirmDelete) {
      library.splice(index, 1);
      renderBooks();
    }
  }
});
