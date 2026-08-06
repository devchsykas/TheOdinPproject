/**
 * This module handles the modals for adding tasks and creating projects.
 *
 */

/**
 * Selects the "Add Project" button and the project modal.
 * Selects the "Add Task" button and the task modal.
 */
const addProjectModalBtn = document.getElementById("btn-add-project-modal");
const projectModal = document.getElementById("project-modal");
const projectForm = document.getElementById("project-form");
const addTaskModalBtn = document.getElementById("btn-add-task-modal");
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");

/**
 * Adds a click event listener to the "Add Project" button to open the project modal.
 */
addProjectModalBtn.addEventListener("click", () => {
  projectModal.showModal();
});

/**
 * Adds a close event listener to the project modal to handle the creation of a new project.
 */
projectModal.addEventListener("close", () => {
  if (projectModal.returnValue === "create") {
    console.log("Project created");
  } else {
    console.log("Project canceled");
  }
  projectForm.reset();
});

/**
 * Adds a click event listener to the "Add Task" button to open the task modal.
 */
addTaskModalBtn.addEventListener("click", () => {
  taskModal.showModal();
});

/**
 * Adds a close event listener to the task modal to handle the creation of a new task.
 */
taskModal.addEventListener("close", () => {
  if (taskModal.returnValue === "save") {
    console.log("Task created");
  } else {
    console.log("Task canceled");
  }
  taskForm.reset();
});
