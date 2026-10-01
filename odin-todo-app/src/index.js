import "./styles/main.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/cards.css";
import "./styles/footer.css";
import "./styles/modals.css";
import "./modules/modals.js";
import "./modules/task.js";
import "./modules/project.js";
import "./modules/storage.js";
import "./modules/ui.js";

// ==========================================================================
// 1. APP STATE
// ==========================================================================

let projects = Storage.getProjects();
let activeProjectId = projects[0] ? projects[0].id : null;

// ==========================================================================
// 2. HELPER FUNCTIONS
// =========================================================================

/**
 * Gets the currently active project based on the activeProjectId.
 * @returns {Project|null} The active project or null if not found.
 */
function getActiveProject() {
  return projects.find((project) => {
    project.id === activeProjectId;
  });
}

/**
 * Updates the application state by saving projects to storage and re-rendering the UI.
 */
function updateApp() {
  Storage.saveProjects(projects);
  UI.renderProjects(projects, activeProjectId);
  UI.renderTasks(getActiveProject());
}

// ==========================================================================
// 3. EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initial render of the application
  updateApp();

  // Event listener for project selection in the sidebar
  const projectList = document.querySelector(".sidebar__list");
  projectList.addEventListener("click", (e) => {
    const item = e.target.closest(".sidebar__item");
    if (!item) return;

    activeProjectId = item.dataset.projectId;
    updateApp();
  });

  // Event listener for opening the task modal
  const openTaskModalBtn = document.getElementById("open-task-modal-btn");
  if (openTaskModalBtn) {
    openTaskModalBtn.addEventListener("click", () => {
      UI.openModal("task-modal");
    });
  }

  // Event listener for opening the project modal
  const projectForm = document.getElementById("project-form");
  if (projectForm) {
    projectForm.addEventListener("submit", (e) => {
      if (e.submitter && e.submitter.value === "cancel") return;

      const formData = new FormData(projectForm);
      const name = formData.get("projectName").trim();
      const color = formData.get("projectColor") || "4f46e5";

      if (name) {
        const newProject = new Project(name, color);
        projects.push(newProject);
        activeProjectId = newProject.id;
        updateApp();
        UI.closeModal("project-modal");
      }
    });
  }

  // Event listener for task form submission
  const taskForm = document.getElementById("task-form");
  if (taskForm) {
    taskForm.addEventListener("submit", (e) => {
      if (e.submitter && e.submitter.value === "cancel") return;

      const formData = new FormData(taskForm);
      const title = formData.get("taskTitle").trim();
      const description = formData.get("taskDescription").trim();
      const dueDate = formData.get("taskDueDate");
      const priority = formData.get("taskPriority") || "low";

      const currentProject = getActiveProject();

      if (title && currentProject) {
        const newTask = new Task(
          title,
          description,
          dueDate,
          priority,
          currentProject.id,
        );
        currentProject.addTask(newTask);
        updateApp();
        UI.closeModal("task-modal");
      }
    });
  }

  // Event listener for task card interactions (checkbox and delete button)
  const tasksGrid = document.querySelector(".tasks-grid");
  tasksGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".task-card");
    if (!card) return;

    const taskId = card.dataset.taskId;
    const currentProject = getActiveProject();
    if (!currentProject) return;

    const task = currentProject.getTask(taskId);

    // Handle checkbox toggle for task completion
    if (e.target.classList.contains("task-card__checkbox")) {
      if (task) {
        task.toggleComplete();
        updateApp();
      }
    }

    // Handle task deletion
    if (e.target.classList.contains("btn-delete")) {
      if (task && confirm("Are you sure you want to delete this task?")) {
        currentProject.removeTask(taskId);
        updateApp();
      }
    }
  });
});
