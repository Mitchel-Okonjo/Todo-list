// create class for todo items
class Todo {
  constructor(title, description, date, priority, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = id;
  }
}

// module for displaying todo items
const todoFns = (() => {
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
    const todoDate = document.createElement("input");
    todoDate.value = date;
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

  const display = (title, date, id) => {
    // if (title === "") return;
    const todoList = document.querySelector(".main-content");
    const newTodo = createTodoItem(title, date, id);
    const firstItem = todoList.firstChild;
    todoList.insertBefore(newTodo, firstItem);
  };

  return { display };
})();

export { Todo, todoFns };
