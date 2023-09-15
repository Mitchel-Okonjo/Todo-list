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

export { Project, projectFns };
