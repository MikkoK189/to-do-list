import { addToDoItem } from "./handleToDos";

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

function populatePopUp(type) {
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
      formElement.appendChild(titleInput);

      const descriptionLabel = document.createElement("label");
      descriptionLabel.htmlFor = "description";
      descriptionLabel.textContent = "Description";
      formElement.appendChild(descriptionLabel);
      const descriptionInput = document.createElement("input");
      descriptionInput.type = "text";
      descriptionInput.id = "description";
      formElement.appendChild(descriptionInput);

      const dateLabel = document.createElement("label");
      dateLabel.htmlFor = "date";
      dateLabel.textContent = "Due date";
      formElement.appendChild(dateLabel);
      const dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.id = "date";
      formElement.appendChild(dateInput);

      const priorityLabel = document.createElement("label");
      priorityLabel.htmlFor = "priority";
      priorityLabel.textContent = "Priority";
      formElement.appendChild(priorityLabel);
      const priorityInput = document.createElement("input");
      priorityInput.type = "number";
      priorityInput.id = "priority";
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
      break;
    default:
      break;
  }
}

export { createPopUp, removePopUp, populatePopUp };
