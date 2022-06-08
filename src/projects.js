const projectsArray = [];

let currentProject = new Project("Default");
projectsArray.push(currentProject);
projectsArray.push(new Project("Test"));

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
}

function setCurrentProject(project) {
  currentProject = project;
}

export { getCurrentProject, getProjectList, setCurrentProject, createProject };
