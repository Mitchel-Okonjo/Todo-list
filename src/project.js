import { Store } from "./localStorage";

class Project {
  constructor(title, id) {
    this.title = title;
    this.dataId = id;
  }
}

const ProjectCtrl = (() => {
  const createProject = (title, id) => {
    if (Store.checkArray("Projects")) {
      const array = Store.getArray("Projects");
      array.push(new Project(title, id));
      Store.setArray(array, "Projects");
    } else {
      const array = [];
      array.push(new Project(title, id));
      Store.setArray(array, "Projects");
    }
  };

  const remove = (id) => {
    Store.removeItem("Projects", id);
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

export { Project, ProjectDisp, ProjectCtrl };
