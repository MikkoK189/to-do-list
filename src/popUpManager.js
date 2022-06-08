import {
  addToDoItem,
  getToDoItem,
  removeToDoItem,
  sortToDos,
} from "./handleToDos";
import {
  createProject,
  getCurrentProject,
  getProjectList,
  setCurrentProject,
} from "./projects";

function createPopUp() {
  const content = document.getElementById("content");

  const popUpContainer = document.createElement("div");
  popUpContainer.id = "popup-container";
  content.appendChild(popUpContainer);

  const background = document.createElement("div");
  background.id = "background";

  popUpContainer.appendChild(background);
  background.addEventListener("click", removePopUp);

  const popupElement = document.createElement("div");
  popupElement.id = "popup";
  popUpContainer.appendChild(popupElement);
}

function removePopUp() {
  const popUpContent = document.getElementById("popup-container");

  while (popUpContent.firstChild) {
    popUpContent.removeChild(popUpContent.lastChild);
  }
  document.getElementById("content").removeChild(popUpContent);
}

function populatePopUp(type, id) {
  const popUpContainer = document.getElementById("popup");
  switch (type) {
    case "form":
      const formElement = document.createElement("form");
      popUpContainer.appendChild(formElement);

      const titleLabel = document.createElement("label");
      titleLabel.htmlFor = "title";
      titleLabel.textContent = "Title";
      formElement.appendChild(titleLabel);
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.id = "title";
      titleInput.setAttribute("required", 1);
      formElement.appendChild(titleInput);

      const descriptionLabel = document.createElement("label");
      descriptionLabel.htmlFor = "description";
      descriptionLabel.textContent = "Description";
      formElement.appendChild(descriptionLabel);
      const descriptionInput = document.createElement("input");
      descriptionInput.type = "text";
      descriptionInput.id = "description";
      descriptionInput.setAttribute("required", 1);
      formElement.appendChild(descriptionInput);

      const dateLabel = document.createElement("label");
      dateLabel.htmlFor = "date";
      dateLabel.textContent = "Due date";
      formElement.appendChild(dateLabel);
      const dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.id = "date";
      dateInput.setAttribute("required", 1);
      formElement.appendChild(dateInput);

      const priorityLabel = document.createElement("label");
      priorityLabel.htmlFor = "priority";
      priorityLabel.textContent = "Priority";
      formElement.appendChild(priorityLabel);
      const priorityInput = document.createElement("input");
      priorityInput.type = "number";
      priorityInput.id = "priority";
      priorityInput.setAttribute("required", 1);
      formElement.appendChild(priorityInput);

      const closeButton = document.createElement("button");
      closeButton.textContent = "X";
      closeButton.id = "close-button";
      closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        removePopUp();
      });
      formElement.appendChild(closeButton);

      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      submitButton.id = "submit-button";
      formElement.appendChild(submitButton);

      formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        addToDoItem(event);
      });
      break;
    case "projectList":
      const projectList = getProjectList();
      const currentProject = getCurrentProject();
      projectList.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        const titleElement = document.createElement("h1");
        titleElement.textContent = project.title;
        projectCard.appendChild(titleElement);
        projectCard.addEventListener("click", (event) => {
          console.log("WAT");
          setCurrentProject(project);
          removePopUp();
        });
        popUpContainer.appendChild(projectCard);
        if (project == currentProject) {
          projectCard.classList.add("selected");
        }
      });
      const newProjectbutton = document.createElement("button");
      newProjectbutton.textContent = "New";
      popUpContainer.appendChild(newProjectbutton);
      newProjectbutton.addEventListener("click", () => {
        let title = prompt("Enter new project title");
        if (title == null || title == "") {
          return;
        } else {
          createProject(title);
          removePopUp();
        }
      });
      break;
    case "todo":
      const titleElement = document.createElement("h1");
      titleElement.textContent = getToDoItem(id).title;
      popUpContainer.appendChild(titleElement);
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = getToDoItem(id).description;
      popUpContainer.appendChild(descriptionElement);
      const doneButton = document.createElement("button");
      doneButton.textContent = "Done";
      doneButton.addEventListener("click", () => {
        removeToDoItem(id);
        sortToDos();
        removePopUp();
      });
      popUpContainer.appendChild(doneButton);
      // const removeButton = document.createElement("button");
      // removeButton.textContent = "Remove";
      // popUpContainer.appendChild(removeButton);
      break;
    default:
      break;
  }
}

export { createPopUp, removePopUp, populatePopUp };
