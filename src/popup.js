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

export { Popup };
