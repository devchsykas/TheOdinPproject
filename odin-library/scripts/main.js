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

// Variable to store the unique identifier for the book being edited or added
//const uuid = crypto.randomUUID();

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
    id: crypto.randomUUID(),
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
  // Get the image file from the data object
  let image = data.image;

  // Convert file to usable URL
  if (image instanceof File) {
    image = URL.createObjectURL(image);
  }
  // Create a new book object with the provided data
  return new Book(
    image,
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
  //form.reset();
}

/**
 * The function `deleteBook` removes a book from a library array based on the provided book ID.
 * @param id - The `id` parameter in the `deleteBook` function is used to identify the specific book
 * that needs to be deleted from the library array. It is passed to the function to find the index of
 * the book in the array and then remove it from the library.
 */
function deleteBook(id) {
  // Get the book to be deleted from the library array at the specified index
  const index = findBookIndexById(id);

  if (index !== -1) {
    // Remove the book from the library array
    library.splice(index, 1);
  }
  console.log(`Book deleted from Library: ${deletedBook.title}`);
  // renderBooks();
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
      <td>${book.image ? `<img src="${book.image}" alt="${book.title}">` : "No Image"}</td>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.isbn}</td>
      <td>${book.author}</td>
      <td>${book.publisher}</td>
      <td>${book.category}</td>
      <td>${book.rack}</td>
      <td>${book.numOfCopies}</td>
      <td>
        <span class="status status--${book.status}">
          ${book.status}</span>
      </td>
      <td>
        <button class="btn edit--btn" data-id="${book.id}">Edit</button>
        <button class="btn delete--btn" data-id="${book.id}">Delete</button>
      </td>
    `;
    // Append the row to the end of the table body
    tbody.appendChild(row);
  });
}

/**
 * The function `findBookId` searches for a book in a library by its ID.
 * @param id - The `id` parameter is the unique identifier of the book that you want to find in the
 * `library` array. The `findBookId` function takes this `id` as an argument and searches for a book in
 * the `library` array that matches this `id`.
 * @returns The `findBookId` function is returning the book object from the `library` array that has
 * the specified `id`.
 */
function findBookId(id) {
  return library.find((book) => book.id === id);
}

/**
 * The function `findBookIndexById` returns the index of a book in a library array based on its ID.
 * @param id - The `id` parameter in the `findBookIndexById` function is the unique identifier of the
 * book that you want to find in the `library` array.
 * @returns The `findBookIndexById` function is returning the index of a book in the `library` array
 * that matches the given `id`.
 */
function findBookIndexById(id) {
  return library.findIndex((book) => book.id === id);
}

/**
 * The function `validateForm` checks if an image is selected in a form and alerts the user if not.
 * @param formData - The `formData` parameter is likely an object containing data from a form, such as
 * user input values.
 * @returns The function `validateForm` will return `false` if `editIndex` is `null` and
 * `formData.image` is falsy (empty or undefined), indicating that the user needs to select an image.
 * Otherwise, it will return `true`.
 */
function validateForm(formData) {
  // Check if an image is selected in the form and alert the user if not selected
  if (editIndex === null && !formData.image) {
    alert("Please select an image");
    return false;
  } else {
    return true;
  }
}

/**
 * The function `handleFormSubmit` is triggered when the form is submitted. It gets the form data, creates a book object, adds the book to the library array, and then renders the books.
 * @returns The function does not return anything.
 */
function handleFormSubmit() {
  // Get the form data from the DOM elements
  const formData = getFormData();

  // Keep same ID if editing
  if (editIndex !== null) {
    formData.id = library[editIndex].id;
  }

  // Create a new book object from the form data
  const book = createBook(formData);
  // Add the book to the library array
  addBookToLibrary(book);
  // Render the books
  renderBooks();
  // Clear the form data
  form.reset();
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
 * @param id - The `id` parameter in the `handleEditClick` function is used to identify the specific book that needs to be edited. It is passed to the function when an edit button is clicked, allowing the function to retrieve the corresponding book data from the library array and populate the form with that data for editing.
 */
function handleEditClick(id) {
  // Get the book to be edited from the library array at the specified index
  const book = findBookId(id);
  // Store the index of the book being edited globally for later use in the `handleFormSubmit` function
  editIndex = findBookIndexById(id);

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

  // Get the form data from the form elements on the page
  const formData = getFormData();

  // Check if the form data is valid and alert the user if not
  if (!validateForm(formData)) {
    return;
  }

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
 * When an edit button is clicked, the function `handleEditClick` is triggered.
 * @param e - the event object that triggered the function
 */
tbody.addEventListener("click", (e) => {
  //console.log("clicked", e.target);
  // Get the index of the book to be deleted or edited from the event target dataset index property
  const id = e.target.dataset.id;
  // If the clicked element has the class "edit--btn", call the `handleEditClick` function with the id as an argument
  if (e.target.classList.contains("edit--btn")) {
    handleEditClick(id);
  }

  // If the clicked element has the class "delete--btn", show a confirmation dialog
  if (e.target.classList.contains("delete--btn")) {
    //console.log(index);
    const confirmDelete = confirm("Are you sure you want to delete this book?");

    // If the user confirms the deletion, call the `deleteBook` function with the id as an argument and re-render the books
    if (confirmDelete) {
      deleteBook(id);
      renderBooks();
    }
  }
});
