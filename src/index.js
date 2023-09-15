import { Popup } from "./popup";
import { Todo, todoFns } from "./todo";
import { Project, projectFns } from "./project";

const logicCtrl = (() => {
  const todoArr = [];
  const projectArr = [];

  const createTodo = (title, description, date, priority, id) => {
    todoArr.push(new Todo(title, description, date, priority, id));
  };

  const createProject = (title, id) => {
    projectArr.push(new Project(title, id));
  };

  return { todoArr, projectArr, createTodo, createProject };
})();

const displayCtrl = (() => {
  // Declare variables
  const todoTitle = document.querySelector(".task-input.title");
  const projectTitle = document.querySelector(".project-input.title");
  const description = document.querySelector(".description");
  const date = document.querySelector(".date-input");
  const priorities = document.getElementsByName("priority");
  const submitTodo = document.querySelector(".submit.task");
  const submitProject = document.querySelector(".submit.project");
  const body = document.body;
  let todoId = 0;
  let projectId = 0;
  let priority;

  body.addEventListener("click", (e) => {
    Popup.open(e);
    Popup.close(e);
  });

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

    todoFns.display(todoTitle.value, date.value, todoId);
    logicCtrl.createTodo(
      todoTitle.value,
      description.value,
      date.value,
      priority,
      todoId
    );
    todoId++;

    e.preventDefault();
    Popup.closePopup();
  });

  submitProject.addEventListener("click", (e) => {
    if (Popup.projectFormNotComplete()) return;
    projectFns.display(projectTitle.value);
    logicCtrl.createProject(projectTitle.value, projectId);
    projectId++;

    e.preventDefault();
    Popup.closePopup();
  });
})();
