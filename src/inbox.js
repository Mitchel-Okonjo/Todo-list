import { Store } from "./localStorage";
import { TodoDisp } from "./todo";
import { Display } from "./display";

const Inbox = (() => {
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

  const display = () => {
    Display.showAddTaskNav();
    Display.clear();
    if (Display.isCurrentHeading("Inbox") && Display.pageLoaded()) return;
    Display.changeHeading("Inbox");
    const arr = Store.getArray("Inbox");
    Display.navFocus("Inbox");
    if (Store.checkArray("Inbox") === false) {
      displayAddButton();
    } else {
      Display.loadItems(arr, TodoDisp);
      displayAddButton();
    }
  };

  return { display };
})();

export { Inbox };
