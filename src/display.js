const Display = (() => {
  const pageLoaded = () => {
    const page = document.querySelector(".main-content");
    if (page.innerHTML !== "") return true;
    return false;
  };
  const changeHeading = (newHeading) => {
    const heading = document.querySelector(".main-header");
    heading.textContent = `${newHeading}`;
  };

  const isCurrentHeading = (currHeading) => {
    const heading = document.querySelector(".main-header");
    return heading.textContent === currHeading;
  };

  const loadItems = (arr, module) => {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      module.display(item.title, item.date, item.dataId);
    }
  };

  const clear = () => {
    const page = document.querySelector(".main-content");
    page.innerHTML = "";
  };

  const showAddTaskNav = () => {
    const nav = document.querySelector(".sidebar-item.add-task");
    nav.classList.add("active");
  };

  const removeAddTaskNav = () => {
    const nav = document.querySelector(".sidebar-item.add-task");
    nav.classList.remove("active");
  };

  const navFocus = (className) => {
    const navs = document.querySelectorAll(".nav-item");
    navs.forEach((nav) => {
      nav.classList.remove("nav-focus");
    });
    const currNav = document.querySelector(`.${className}`);
    currNav.classList.add("nav-focus");
  };

  // const sidebar = document.querySelector(".sidebar");
  // const mainContent = document.querySelector(".main");

  // function setMargins() {
  //   const sidebarWidth = sidebar.offsetWidth;
  //   mainContent.style.marginLeft = `${sidebarWidth}px`;
  // }

  // setMargins();

  // window.onresize = () => {
  //   setMargins();
  // };

  return {
    changeHeading,
    loadItems,
    navFocus,
    isCurrentHeading,
    pageLoaded,
    clear,
    showAddTaskNav,
    removeAddTaskNav,
  };
})();

export { Display };
