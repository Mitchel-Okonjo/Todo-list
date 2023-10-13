import { Store } from "./localStorage";
import { TodoDisp } from "./todo";
import { DateFns } from "./date";
import { Display } from "./display";

const Today = (() => {
  const display = () => {
    Display.removeAddTaskNav();
    Display.clear();
    if (Display.isCurrentHeading("Today") && Display.pageLoaded()) return;
    Display.changeHeading("Today");
    Display.navFocus("Today");
    Store.setArray(DateFns.filterTodayTodos(), "Today");
    const arr = Store.getArray("Today");
    Display.loadItems(arr, TodoDisp);
    Display.toggleNav();
  };

  return { display };
})();

export { Today };
