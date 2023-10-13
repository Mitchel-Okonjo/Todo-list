import { Popup } from "./popup";
import { TodoDisp, TodoCtrl } from "./todo";
import { ProjectDisp, ProjectCtrl } from "./project";
import { Inbox } from "./inbox";
import { Today } from "./today";
import { ThisWeek } from "./thisWeek";
import { Store } from "./localStorage";
import { DateFns } from "./date";
import { Display } from "./display";

const DisplayCtrl = (() => {
  Inbox.display();

  // Declare variables
  const todoTitle = document.querySelector(".task-input.title");
  const projectTitle = document.querySelector(".project-input.title");
  const description = document.querySelector(".description");
  const date = document.querySelector(".date-input");
  const priorities = document.getElementsByName("priority");
  const submitTodo = document.querySelector(".submit.task");
  const submitProject = document.querySelector(".submit.project");
  let priority;

  // Handle media query change for side navigation
  const mediaQuery = window.matchMedia("(min-width: 800px), (width: 800px)");
  mediaQuery.addEventListener("change", Display.handleMediaChange);

  document.addEventListener("click", (e) => {
    // Toggle Sidebar Nav button
    const navBtn = document.querySelector("nav");
    const navOverlay = document.querySelector(".nav-overlay");

    if (navBtn.contains(e.target)) {
      Display.toggleNav();
    } else if (e.target === navOverlay) {
      Display.toggleNav();
    }
  });

  document.addEventListener("click", (e) => {
    // Listen to events to open/close popup
    Popup.open(e);
    Popup.close(e);
  });

  // Handle change of nav
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("Inbox")) Inbox.display();
    if (e.target.classList.contains("Today")) Today.display();
    if (e.target.classList.contains("ThisWeek")) ThisWeek.display();
  });

  // Remove Todo-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-cancel")) {
      TodoDisp.remove(e);
    }
  });

  // Remove Project-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-cancel")) {
      ProjectDisp.remove(e);
    }
  });

  // Add Todo-item to list
  submitTodo.addEventListener("click", (e) => {
    // Handle incomplete form
    if (Popup.todoFormNotComplete()) return;

    // Handle past date inputs
    if (DateFns.notValid(date.value)) {
      alert("Plese enter a future date!");
      e.preventDefault();
      return;
    }

    // Handle priority input
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i].checked) {
        priority = priorities[i].value;
        break;
      } else {
        priority = "";
      }
    }

    // Get id value from Storage and increment id count
    const todoId = Store.getId("todo-id");
    Store.setId("todo-id", Number(todoId) + 1);

    TodoCtrl.createTodo(
      todoTitle.value,
      description.value,
      date.value,
      priority,
      todoId
    );
    // Prevent form from submitting input to server
    e.preventDefault();
    Popup.closePopup();

    if (Display.isCurrentHeading("Today")) Today.display();
    if (Display.isCurrentHeading("This Week")) ThisWeek.display();
    if (Display.isCurrentHeading("Inbox")) Inbox.display();

    DateFns.setTodayTodos();
    DateFns.setThisWeekTodos();
  });

  // Add Project Item to list
  submitProject.addEventListener("click", (e) => {
    if (Popup.projectFormNotComplete()) return;

    // Get id value from Storage and increment id count
    const projectId = Store.getId("project-id");
    Store.setId("project-id", Number(projectId) + 1);

    ProjectDisp.display(projectTitle.value, projectId);
    ProjectCtrl.createProject(projectTitle.value, projectId);

    // Prevent form from submitting input to server
    e.preventDefault();
    Popup.closePopup();
  });
})();
