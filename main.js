/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      return;
    }
  };

  const closePopup = () => {
    const currentPopup = document.querySelector(".popup.active");
    currentPopup.classList.remove("active");
    removeOverlay();
    setTimeout(clearForm, 200);
  };

  const cancelWasClicked = (e) => {
    return e.target.matches(".cancel-popup");
  };

  const overlayWasClicked = (e) => {
    return e.target.matches(".overlay");
  };

  const todoFormNotComplete = () => {
    return todoTitle.value === "" || date.value === "";
  };

  const projectFormNotComplete = () => {
    return projectTitle.value === "";
  };

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
    const date = document.querySelector(".date-input");
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
/* harmony export */   "projectFns": () => (/* binding */ projectFns)
/* harmony export */ });
class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }
}

const projectFns = (() => {
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

  const display = (title) => {
    console.log("displayed");
    const projectList = document.querySelector(".projects-list");
    projectList.appendChild(createProject(title));
  };

  return { display };
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
/* harmony export */   "todoFns": () => (/* binding */ todoFns)
/* harmony export */ });
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




const logicCtrl = (() => {
  const todoArr = [];
  const projectArr = [];

  const createTodo = (title, description, date, priority, id) => {
    // if (title === "") return;
    todoArr.push(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, date, priority, id));
  };

  const createProject = (title, id) => {
    projectArr.push(new _project__WEBPACK_IMPORTED_MODULE_2__.Project(title, id));
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
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.open(e);
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.close(e);
  });

  submitTodo.addEventListener("click", (e) => {
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.todoFormNotComplete()) return;
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i].checked) {
        priority = priorities[i].value;
        break;
      } else {
        priority = "";
      }
    }

    _todo__WEBPACK_IMPORTED_MODULE_1__.todoFns.display(todoTitle.value, date.value, todoId);
    logicCtrl.createTodo(
      todoTitle.value,
      description.value,
      date.value,
      priority,
      todoId
    );
    todoId++;

    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();
  });

  submitProject.addEventListener("click", (e) => {
    if (_popup__WEBPACK_IMPORTED_MODULE_0__.Popup.projectFormNotComplete()) return;
    _project__WEBPACK_IMPORTED_MODULE_2__.projectFns.display(projectTitle.value);
    logicCtrl.createProject(projectTitle.value, projectId);
    projectId++;

    e.preventDefault();
    _popup__WEBPACK_IMPORTED_MODULE_0__.Popup.closePopup();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map