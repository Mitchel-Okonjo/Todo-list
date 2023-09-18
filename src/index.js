import { Popup } from "./popup";
import { TodoDisp, TodoCtrl } from "./todo";
import { ProjectDisp, ProjectCtrl } from "./project";
import { Inbox } from "./inbox";
import { Store } from "./localStorage";

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

  document.addEventListener("click", (e) => {
    // Listen to events to open/close popup
    Popup.open(e);
    Popup.close(e);
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
    if (Popup.todoFormNotComplete()) return;
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

    TodoDisp.display(todoTitle.value, date.value, todoId);
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
