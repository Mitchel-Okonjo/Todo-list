import { Store } from "./localStorage";
import { TodoDisp } from "./todo";
import { DateFns } from "./date";
import { Display } from "./display";

const ThisWeek = (() => {
  const display = () => {
    Display.removeAddTaskNav();
    Display.clear();
    if (Display.isCurrentHeading("This Week") && Display.pageLoaded()) return;
    Display.changeHeading("This Week");
    Display.navFocus("ThisWeek");
    Store.setArray(DateFns.filterThisWeekTodos(), "ThisWeek");
    const arr = Store.getArray("ThisWeek");
    Display.loadItems(arr, TodoDisp);
  };

  return { display };
})();

export { ThisWeek };
