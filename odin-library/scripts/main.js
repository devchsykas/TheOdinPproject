"use strict";

/**
 * This is the main JS file for the library management system.
 */

/**
 * The `form` element is selected from the DOM.
 */
const form = document.getElementById("bookForm");

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
  copies,
  status,
  image,
) {
  this.title = title;
  this.isbn = isbn;
  this.author = author;
  this.publisher = publisher;
  this.category = category;
  this.rack = rack;
  this.copies = copies;
  this.status = status;
  this.image = image;
}

/* Creating a new instance of the `Book` object with specific properties. In this case, it is creating a book object with the following details: */
const book1 = new Book(
  " Eloquent JavaScript Third Edition",
  "19381684",
  "Marijn Haverbeke",
  "No Starch Press",
  "Programming Language",
  "R2",
  "5",
  "Available",
  "./assets/images/book-1.jpg",
);

/**
 * The function `addBookToLibrary` adds a book to a library array.
 * @param book
 */
function addBookToLibrary(book) {
  library.push(book);
  // console.log(library);
}

/* This function essentially adds a book to the library's collection by pushing the book object into the array. */
addBookToLibrary(book1);
console.log(library);

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

  console.log(
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
});
