/**
 * This module handles the modals for adding tasks and creating projects.
 *
 */
const addProjectModalBtn = document.getElementById("btn-add-project-modal");
const projectModal = document.getElementById("project-modal");
const projectForm = document.getElementById("project-form");

addProjectModalBtn.addEventListener("click", () => {
  projectModal.showModal();
});

projectModal.addEventListener("close", () => {
  if (projectModal.returnValue === "create") {
    console.log("Project created");
  } else {
    console.log("Project canceled");
  }
  projectForm.reset();
});
