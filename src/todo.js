import { Store } from "./localStorage";

// create class for todo items
class Todo {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.dataId = id;
  }
}

const TodoCtrl = (() => {
  const createTodo = (title, description, date, priority, id) => {
    // If array exists, update it. Else create and store array
    if (Store.checkArray("Inbox")) {
      const array = Store.getArray("Inbox");
      array.push(new Todo(title, description, date, priority, id));
      Store.setArray(array, "Inbox");
    } else {
      const array = [];
      array.push(new Todo(title, description, date, priority, id));
      Store.setArray(array, "Inbox");
    }
  };

  const remove = (id) => {
    Store.removeItem("Inbox", id);
    Store.removeItem("Today", id);
    Store.removeItem("ThisWeek", id);
  };

  return { createTodo, remove };
})();

// module for displaying todo items
const TodoDisp = (() => {
  const createCheckBox = () => {
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("todo-check");
    return checkBox;
  };

  const createTodoTitle = (title) => {
    const todoTitle = document.createElement("div");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");
    return todoTitle;
  };

  const createTodoDate = (date) => {
    const parts = date.split("-");
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    const dateFormat = `${day} - ${month} - ${year}`;
    const todoDate = document.createElement("div");
    todoDate.textContent = dateFormat;
    todoDate.classList.add("todo-date");
    return todoDate;
  };

  const createCancelBtn = () => {
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "delete";
    cancelBtn.classList.add("todo-cancel");
    return cancelBtn;
  };

  const createTodoItem = (title, date, id) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("data-id", id);
    todo.appendChild(createCheckBox());
    todo.appendChild(createTodoTitle(title));
    todo.appendChild(createTodoDate(date));
    todo.appendChild(createCancelBtn());
    return todo;
  };

  const deleteTodoClicked = (e) => e.target.matches(".todo-cancel");

  const remove = (e) => {
    // If delete was clicked, remove todo from display and Storage
    if (deleteTodoClicked(e)) {
      const item = e.target.closest(".todo");
      const id = item.getAttribute("data-id");
      const container = item.closest(".main-content");
      container.removeChild(item);
      TodoCtrl.remove(id);
    }
  };

  // Display todos in stack order
  const display = (title, date, id) => {
    const todoList = document.querySelector(".main-content");
    const newTodo = createTodoItem(title, date, id);
    const firstItem = todoList.firstChild;
    todoList.insertBefore(newTodo, firstItem);
    document.querySelector(".todo-date").readOnly = true;
  };

  return { display, remove };
})();

export { Todo, TodoDisp, TodoCtrl };
