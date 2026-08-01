/**
 * This module handles the modals for adding tasks and creating projects.
 *
 */
const addProjectModalBtn = document.getElementById("btn-add-project-modal");
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");

addProjectModalBtn.addEventListener("click", () => {
  taskModal.showModal();
});
