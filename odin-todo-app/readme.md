# 📝 Todo List App

A modern, responsive, and modular Todo List application built as part of **The Odin Project** JavaScript curriculum.

This project focuses on Object-Oriented Programming (OOP) concepts, Separation of Concerns, Module Pattern, Dynamic DOM Manipulation, Webpack bundling, and Data Persistence using `localStorage`.

---

## ✨ Features

- **Projects Management:** Organize tasks into custom projects (e.g., Work, Personal).
- **Task Details:** Create tasks with titles, descriptions, due dates, priorities, and notes.
- **Priority Levels:** Color-coded task priorities (High 🔴, Medium 🟡, Low 🟢).
- **Dynamic Views:** Filter tasks by current project.
- **Data Persistence:** Tasks and projects persist in browser storage (`localStorage`).
- **Clean UI/UX:** Minimalist design with intuitive interactions.

---

## 🎨 Design System

- **Typography:** `Inter` & `Plus Jakarta Sans`
- **Color Palette:**
  - Background: `#F8F9FA`
  - Text Primary: `#212529`
  - Accent / Actions: `#4F46E5`
  - Priorities: High (`#EF4444`), Medium (`#F59E0B`), Low (`#10B981`)
- **Layout:** Sidebar Navigation + Main Task Content Grid

---

## 📁 Architecture & File Structure

```text
odin-todo-app/
├── dist/                 # Production output (Webpack generated)
├── src/
│   ├── assets/           # Icons and static images
│   ├── modules/          # Core Business Logic &UI Modules
│   │   ├── appLogic.js      # App state management
│   │   ├── domController.js # DOM Manipulation & Events
│   │   ├── project.js       # Project model
│   │   ├── storage.js       # LocalStorage handler
│   │   └── todo.js          # Todo model
│   ├── styles/           # Modular CSS files
│   ├── index.html        # HTML Template
│   └── index.js          # App Entry Point
├── package.json
└── webpack.config.js

## 🚀 Getting Started

To run this project locally, follow these steps:

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation

1.  Clone the repository

```

Bash

git clone [https://github.com/devchsykas/TheOdinProject.git](https://github.com/devchsykas/TheOdinProject.git)

```

2.  Navigate to the project directory:

```

Bash

cd TheOdinProject/odin-todo-app

```

3.  Install dependencies:

```

Bash

npm install

```
4.  Start the development server:

```

Bash

npm start

```
The application will open automatically in your default browser at http://localhost:8080.

5.  Build for production:

```

Bash

npm run build

```

## 📜 License

Distributed under the MIT License. See LICENSE for more information.
```
