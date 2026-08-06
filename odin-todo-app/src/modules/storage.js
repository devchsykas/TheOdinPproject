import { Project } from "./project.js";
import { Task } from "./task.js";

/**
 * Storage key for storing projects
 */
const STORAGE_KEY = "todo_app_projects";

/**
 * Storage class for storing and retrieving projects from local storage
 * @class Storage
 * @description Storage class
 * @exports Storage
 * @static saveProjects
 * @static getProjects
 * @static getDefaultProjects
 */
export class Storage {
  static saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }

  /**
   * Retrieves projects from local storage and returns an array of Project instances
   * @returns {Project[]}
   */
  static getProjects() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return Storage.getDefaultProjects();
    }

    const rawProjects = JSON.parse(data);

    return rawProjects.map((rawProject) => {
      const project = new Project(rawProject.name, rawProject.id);

      if (rawProject.tasks && Array.isArray(rawProject.tasks)) {
        rawProjects.tasks.forEach((rawTask) => {
          const task = new Task(
            rawTask.title,
            rawTask.description,
            rawTask.dueDate,
            rawTask.priority,
            rawTask.project,
          );

          task.id = rawTask.id;
          task.completed = rawTask.completed;

          project.addTask(task);
        });
      }
      return project;
    });
  }

  /**
   * Returns an array of default projects and saves them to local storage
   * @returns {Project[]}
   */
  static getDefaultProjects() {
    const defaultProject = new Project("inbox");

    const defaultTask = new Task(
      "Buy Groceries",
      "Milk, bread, eggs, cheese, vegetables, fruits, etc",
      "2026-06-30",
      "medium",
      defaultProject.id,
    );

    defaultProject.addTask(defaultTask);

    const initialProjects = [defaultProject];
    Storage.saveProjects(initialProjects);

    return initialProjects;
  }
}
