/**
 * Task class
 * @class Task
 * @constructor Creates a new Task instance with the given title, description, due date, priority, and project.
 * @description Task class
 * @exports Task
 */
export class Task {
  constructor(
    title,
    description = "",
    dueDate,
    priority = "low",
    project = "inbox",
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  /**
   * Toggles the completion status of the task.
   */
  toggleComplete() {
    this.completed = !this.completed;
  }

  /**
   * Updates the details of the task based on the provided parameters.
   * @param {*} { title, description, dueDate, priority, project }
   */
  updateDetails({ title, description, dueDate, priority, project }) {
    if (title !== undefined) {
      this.title = title;
    }
    if (description !== undefined) {
      this.description = description;
    }
    if (dueDate !== undefined) {
      this.dueDate = dueDate;
    }
    if (priority !== undefined) {
      this.priority = priority;
    }
    if (project !== undefined) {
      this.project = project;
    }
  }
}
