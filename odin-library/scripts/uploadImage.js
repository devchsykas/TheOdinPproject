/* These lines of code are selecting elements from the HTML document. */
const fileInput = document.getElementById("image");
const fileName = document.querySelector(".file__name");

/**
 * The `fileInput.addEventListener` function is adding an event listener to the `fileInput` element. When the `change` event is triggered on the `fileInput` element, the function inside the event listener is executed.
 */
fileInput.addEventListener("change", () => {
  // If there are files in the file input, set the file name to the first file's name. Otherwise, set the file name to "No file chosen".
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  } else {
    fileName.textContent = "No file chosen";
  }
});
