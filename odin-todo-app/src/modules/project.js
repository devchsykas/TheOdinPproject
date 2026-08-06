import { Task } from "./task.js";

/**
 * Project class
 * @class Project
 * @constructor Creates a new Project instance with the given name and id.
 * @description Project class
 * @exports Project
 */
export class Project {
  constructor(name, id = crypto.randomUUID()) {
    this.id = id;
    this.name = name;
    this.tasks = [];
  }

  /**
   * Adds a task to the project
   * @param {*} task
   * @returns {void}
   * @throws {Error} If the task is not an instance of Task class
   */
  addTask(task) {
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error("Task is not an instance of Task class");
    }
  }

  /**
   * Removes a task from the project
   * @param {*} taskId
   * @returns {void}
   */
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  /**
   * Returns a task from the project
   * @param {*} taskId
   * @returns {Task}
   */
  getTask(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  /**
   * Returns the number of uncompleted tasks in the project
   * @returns {number}
   */
  getUncompletedCount() {
    return this.tasks.filter((task) => !task.completed).length;
  }
}
