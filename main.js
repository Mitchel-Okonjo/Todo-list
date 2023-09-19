/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFns": () => (/* binding */ DateFns)
/* harmony export */ });
const DateFns = (() => {
  const notValid = (date) => {
    if (new Date(date) <= new Date()) return true;
    return false;
  };

  return { notValid };
})();




/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inbox": () => (/* binding */ Inbox)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const Inbox = (() => {
  const loadItems = (arr) => {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp.display(item.title, item.date, item.dataId);
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
    const arr = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
    navFocus("inbox");
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Inbox") === false) {
      displayAddButton();
    } else {
      loadItems(arr);
      displayAddButton();
    }
  };

  return { display };
})();




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
const Store = (() => {
  // Stores given array in local Storage
  const setArray = (array, name) => {
    // if (!checkStorage("localStorage")) return;
    localStorage.setItem(name, JSON.stringify(array));
  };

  // Get given array from Local Storage
  const getArray = (name) => JSON.parse(localStorage.getItem(name));

  // Check if a given array exists in the local Storage
  const checkArray = (arr) => {
    if (getArray(arr)) {
      return true;
    }
    return false;
  };

  // Get length of a given array
  const getLength = (arr) => {
    const array = getArray(arr);
    return array.length;
  };

  const setId = (name, value) => {
    localStorage.setItem(name, value);
  };

  const getId = (name) => {
    // if given Id variable exists, return the value.
    // Else, set the variable to zero and return the value.
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    localStorage.setItem(name, 0);
    return localStorage.getItem(name);
  };

  // Use Binary search to get specific item from array using a value, target
  const search = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (target > array[mid].dataId) {
        start = mid + 1;
      } else if (target < array[mid].dataId) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };

  // Removes an item from respective array using id of the item
  const removeItem = (name, id) => {
    if (getArray(name) === null) return;
    const array = getArray(name);
    const index = search(array, id);
    if (index === -1) return;
    array.splice(index, 1);
    setArray(array, name);
  };

  return {
    setArray,
    getArray,
    checkArray,
    getLength,
    removeItem,
    setId,
    getId,
  };
})();




/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
const Popup = (() => {
  // Declare variables
  const newTask = document.querySelector(".task-popup");
  const newProject = document.querySelector(".project-popup");
  const overlay = document.querySelector(".overlay");
  const todoTitle = document.querySelector(".task-input.title");
  const projectTitle = document.querySelector(".project-input.title");
  const date = document.querySelector(".date-input");

  const openTask = () => {
    newTask.classList.add("active");
    addOverlay();
  };

  const openProject = () => {
    newProject.classList.add("active");
    addOverlay();
  };

  const addOverlay = () => {
    overlay.classList.add("active");
  };

  const removeOverlay = () => {
    overlay.classList.remove("active");
  };

  const open = (e) => {
    if (e.target.matches(".add-task")) {
      openTask();
    } else if (e.target.matches(".add-project")) {
      openProject();
    } else {
    }
  };

  const closePopup = () => {
    const currentPopup = document.querySelector(".popup.active");
    currentPopup.classList.remove("active");
    removeOverlay();
    setTimeout(clearForm, 200);
  };

  const cancelWasClicked = (e) => e.target.matches(".cancel-popup");

  const overlayWasClicked = (e) => e.target.matches(".overlay");

  const todoFormNotComplete = () => todoTitle.value === "" || date.value === "";

  const projectFormNotComplete = () => projectTitle.value === "";

  const close = (e) => {
    // if close button or overlay was clicked then remove popup and overlay
    if (cancelWasClicked(e) || overlayWasClicked(e)) {
      closePopup();
      clearForm();
    }
  };

  const clearForm = () => {
    // Clear form inputs immediately Popup is closed
    setTimeout(resetFormInput, 200);
  };

  const resetFormInput = () => {
    const description = document.querySelector(".description");
    const priorities = document.getElementsByName("priority");

    projectTitle.value = "";
    todoTitle.value = "";
    description.value = "";
    date.value = "";
    for (let i = 0; i < priorities.length; i++) {
      const priority = priorities[i];
      priority.checked = false;
    }
  };

  return {
    open,
    close,
    todoFormNotComplete,
    projectFormNotComplete,
    closePopup,
  };
})();




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectCtrl": () => (/* binding */ ProjectCtrl),
/* harmony export */   "ProjectDisp": () => (/* binding */ ProjectDisp)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


class Project {
  constructor(title, id) {
    this.title = title;
    this.dataId = id;
  }
}

const ProjectCtrl = (() => {
  const createProject = (title, id) => {
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Projects")) {
      const array = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Projects");
      array.push(new Project(title, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Projects");
    } else {
      const array = [];
      array.push(new Project(title, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Projects");
    }
  };

  const remove = (id) => {
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("Projects", id);
  };

  return { createProject, remove };
})();

const ProjectDisp = (() => {
  const createProjectTitle = (title) => {
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-name", "sidebar-text");
    projectTitle.textContent = title;
    return projectTitle;
  };

  const createProjectIcon = () => {
    const projectIcon = document.createElement("img");
    projectIcon.classList.add("icon", "sidebar-icon");
    projectIcon.setAttribute("src", "icons/format-list-bulleted.svg");
    projectIcon.setAttribute("alt", "Format-list icon");
    return projectIcon;
  };

  const createProjectCancelBtn = () => {
    const projectCancelBtn = document.createElement("button");
    projectCancelBtn.classList.add("project-cancel");
    projectCancelBtn.innerHTML = "&times";
    return projectCancelBtn;
  };

  const createProject = (title, id) => {
    const project = document.createElement("div");
    project.classList.add("sidebar-item", "project");
    project.setAttribute("data-id", id);
    project.appendChild(createProjectIcon());
    project.appendChild(createProjectTitle(title));
    project.appendChild(createProjectCancelBtn());
    return project;
  };

  const deleteProjectClicked = (e) => e.target.matches(".project-cancel");

  const remove = (e) => {
    // If cancel btn was clicked, remove project from display and storage
    if (deleteProjectClicked(e)) {
      const item = e.target.closest(".project");
      const id = item.getAttribute("data-id");
      const container = item.closest(".projects-list");
      container.removeChild(item);
      ProjectCtrl.remove(id);
    }
  };

  // Display projects in stack order
  const display = (title, id) => {
    const projectList = document.querySelector(".projects-list");
    const newProject = createProject(title, id);
    const firstItem = projectList.firstChild;
    projectList.insertBefore(newProject, firstItem);
  };

  return { display, remove };
})();




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "TodoCtrl": () => (/* binding */ TodoCtrl),
/* harmony export */   "TodoDisp": () => (/* binding */ TodoDisp)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


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
    if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.checkArray("Inbox")) {
      const array = _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.getArray("Inbox");
      array.push(new Todo(title, description, date, priority, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Inbox");
    } else {
      const array = [];
      array.push(new Todo(title, description, date, priority, id));
      _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.setArray(array, "Inbox");
    }
  };

  const remove = (id) => {
    _localStorage__WEBPACK_IMPORTED_MODULE_0__.Store.removeItem("Inbox", id);
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date */ "./src/date.js");







const DisplayCtrl = (() => {
  _inbox__WEBPACK_IMPORTED_MODULE_3__.Inbox.display();

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
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.open(e);
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.close(e);
  });

  // Remove Todo-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-cancel")) {
      _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp.remove(e);
    }
  });

  // Remove Project-item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-cancel")) {
      _project__WEBPACK_IMPORTED_MODULE_2__.ProjectDisp.remove(e);
    }
  });

  // Add Todo-item to list
  submitTodo.addEventListener("click", (e) => {
    // Handle incomplete form
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.todoFormNotComplete()) return;

    // Handle past date inputs
    if (_date__WEBPACK_IMPORTED_MODULE_5__.DateFns.notValid(date.value)) {
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
    const todoId = _localStorage__WEBPACK_IMPORTED_MODULE_4__.Store.getId("todo-id");
    _localStorage__WEBPACK_IMPORTED_MODULE_4__.Store.setId("todo-id", Number(todoId) + 1);

    _todo__WEBPACK_IMPORTED_MODULE_1__.TodoDisp.display(todoTitle.value, date.value, todoId);
    _todo__WEBPACK_IMPORTED_MODULE_1__.TodoCtrl.createTodo(
      todoTitle.value,
      description.value,
      date.value,
      priority,
      todoId
    );

    // Prevent form from submitting input to server
    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();
  });

  // Add Project Item to list
  submitProject.addEventListener("click", (e) => {
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.projectFormNotComplete()) return;

    // Get id value from Storage and increment id count
    const projectId = _localStorage__WEBPACK_IMPORTED_MODULE_4__.Store.getId("project-id");
    _localStorage__WEBPACK_IMPORTED_MODULE_4__.Store.setId("project-id", Number(projectId) + 1);

    _project__WEBPACK_IMPORTED_MODULE_2__.ProjectDisp.display(projectTitle.value, projectId);
    _project__WEBPACK_IMPORTED_MODULE_2__.ProjectCtrl.createProject(projectTitle.value, projectId);

    // Prevent form from submitting input to server
    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map