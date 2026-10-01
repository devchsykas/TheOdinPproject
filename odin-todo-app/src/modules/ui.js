export class UI {
  // --- 1. RENDER SIDEBAR PROJECTS ---
  static renderProjects(projects, activeProjectId) {
    const projectList = document.querySelector(".sidebar__list");
    if (!projectList) return;

    projectList.innerHTML = "";

    projects.forEach((project) => {
      const isActive = project.id === activeProjectId;
      const uncompletedCount = project.getUncompletedCount();

      const li = document.createElement("li");
      li.className = `sidebar__item ${isActive ? "sidebar__item--active" : ""}`;
      li.dataset.projectId = project.id;

      li.innerHTML = `
        <a href="#" class="sidebar__link">
          <div class="sidebar__link-content">
          <span class="sidebar__color-dot" style="background-color: ${project.color}; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span class="sidebar__text">${UI.escapeHTML(project.name)}</span>
          </div>
          ${
            uncompletedCount > 0
              ? `<span class="sidebar__notification">${uncompletedCount}</span>`
              : ""
          }
        </a>
      `;

      projectList.appendChild(li);
    });
  }

  // --- 2. RENDER TASKS GRID ---
  static renderTasks(project) {
    const tasksGrid = document.querySelector(".tasks-grid");
    const mainTitle = document.querySelector(".main-content__title");

    if (!tasksGrid || !mainTitle) return;

    mainTitle.textContent = project ? project.name : "No project Selected";

    tasksGrid.innerHTML = "";

    if (!project || project.tasks.length === 0) {
      tasksGrid.innerHTML = `<p class="empty-state">No tasks to display.</p>`;
      return;
    }

    project.tasks.forEach((task) => {
      const card = document.createElement("article");
      card.className = `task-card ${task.completed ? "task-card--completed" : ""}`;
      card.dataset.taskId = task.id;

      card.innerHTML = `
        <div class="task-card__header">
          <span class="badge badge--${task.priority}">${task.priority.toUpperCase()}</span>
          <h3 class="task-card__title">${UI.escapeHTML(task.title)}</h3>
        </div>

        ${
          task.description
            ? `<div class="task-card__body"><p>${UI.escapeHTML(task.description)}</p></div>`
            : ""
        }

        <div class="task-card__footer">
          <label class="task-card__checkbox-label">
            <input 
              type="checkbox" 
              class="task-card__checkbox" 
              ${task.completed ? "checked" : ""} 
            />
            <span>${task.completed ? "Done" : "Pending"}</span>
          </label>

          <div class="task-card__actions">
            <button class="btn-action btn-edit" title="Edit">✏️</button>
            <button class="btn-action btn-delete" title="Delete">🗑️</button>
          </div>
        </div>
      `;

      tasksGrid.appendChild(card);
    });
  }

  // --- 3. MODAL CONTROLS ---
  static openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    }
  }

  static closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal && typeof modal.close === "function") {
      modal.close();
      const form = modal.querySelector("form");
      if (form) {
        form.reset();
      }
    }
  }

  // --- 4. SECURITY UTILITY (XSS Prevention) ---
  static escapeHTML(str) {
    return str
      .replace(/&/g, "amp")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
