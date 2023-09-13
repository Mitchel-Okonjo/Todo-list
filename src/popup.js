const Popup = (() => {
  // Declare variables
  const newTask = document.querySelector(".task-popup");
  const newProject = document.querySelector(".project-popup");
  const overlay = document.querySelector(".overlay");

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

  const close = (e) => {
    // if close button or overlay was clicked then close popup and overlay
    if (e.target.matches(".cancel-popup")) {
      e.target.closest(".popup.active").classList.remove("active");
      removeOverlay();
    } else if (e.target.matches(".overlay")) {
      const openPopup = document.querySelector(".popup.active");
      openPopup.classList.remove("active");
      removeOverlay();
    } else {
      return;
    }
  };

  return { open, close };
})();

export { Popup };
