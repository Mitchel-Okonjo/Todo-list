import * as dateFns from "date-fns";
import { Store } from "./localStorage";

const DateFns = (() => {
  const notValid = (date) => {
    if (new Date(date) <= new Date()) return true;
    return false;
  };

  const categorizeTodos = (todo) => {
    const today = new Date();

    if (dateFns.isSameDay(dateFns.parseISO(todo.date), today)) return "today";
    if (dateFns.isSameWeek(dateFns.parseISO(todo.date), today))
      return "this week";
  };

  const filterTodayTodos = () => {
    const todos = Store.getArray("Inbox");
    return todos.filter((todo) => categorizeTodos(todo) === "today");
  };

  const filterThisWeekTodos = () => {
    const todos = Store.getArray("Inbox");
    return todos.filter((todo) => categorizeTodos(todo) === "this week");
  };

  const setTodayTodos = () => {
    const arr = filterTodayTodos();
    Store.setArray(arr, "Today");
  };

  const setThisWeekTodos = () => {
    const arr = filterThisWeekTodos();
    Store.setArray(arr, "ThisWeek");
  };

  return {
    notValid,
    filterTodayTodos,
    filterThisWeekTodos,
    setTodayTodos,
    setThisWeekTodos,
  };
})();

export { DateFns };
