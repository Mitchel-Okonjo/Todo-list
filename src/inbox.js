import { Store } from "./localStorage";
import { TodoDisp } from "./todo";

const Inbox = (() => {
  const loadItems = (arr) => {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      TodoDisp.display(item.title, item.date, item.dataId);
    }
  };

  const displayAddButton = () => {
    const content = document.querySelector(".main-content");
    const div = document.createElement("div");
    div.classList.add("todo", "add-task");
    div.innerHTML = `
    <img
    class="icon sidebar-icon add-task"
    src="icons/plus.svg"
    alt="claendar-week icon"
  />
  <div class="todo-text add-task">Add task</div>`;
    content.appendChild(div);
  };

  const navFocus = (className) => {
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach((nav) => {
      nav.classList.remove("nav-focus");
    });
    const currNav = document.querySelector(`.${className}`);
    currNav.classList.add("nav-focus");
  };

  const display = () => {
    const arr = Store.getArray("Inbox");
    navFocus("inbox");
    if (Store.checkArray("Inbox") === false) {
      displayAddButton();
    } else {
      loadItems(arr);
      displayAddButton();
    }
  };

  return { display };
})();

export { Inbox };
