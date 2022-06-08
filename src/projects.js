import { sortToDos } from "./handleToDos";

const projectsArray = [];

let currentProject = null;

function Project(title) {
  this.title = title;
  this.toDoArray = [];
}

Project.prototype.populateToDos = function (todos) {
  console.log("Not yet implemented");
};

function getCurrentProject() {
  return currentProject;
}

function getProjectList() {
  return projectsArray;
}

function createProject(title) {
  const newProject = new Project(title);
  projectsArray.push(newProject);
  currentProject = newProject;
  saveItems();
}

function setCurrentProject(project) {
  currentProject = project;
  sortToDos();
}

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function saveItems() {
  if (storageAvailable("localStorage")) {
    localStorage.projects = JSON.stringify(projectsArray);
  } else {
    return;
  }
}

function loadItems() {
  if (localStorage.projects) {
    const code = JSON.parse(localStorage.projects);

    code.forEach((element) => {
      projectsArray.push(element);
    });

    currentProject = projectsArray[0];
  } else {
    currentProject = new Project("Default");
    projectsArray.push(currentProject);
    projectsArray.push(new Project("Test"));
    projectsArray.push(new Project("Test 2"));
  }
}

export {
  getCurrentProject,
  getProjectList,
  setCurrentProject,
  createProject,
  saveItems,
  loadItems,
};
