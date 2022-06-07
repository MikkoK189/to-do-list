import { format, compareAsc } from "date-fns";

format(new Date(2014, 1, 11), "MM/dd/yyyy");

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

      break;
    case "projectList":
      break;
    default:
      break;
  }
}

export { createPopUp, removePopUp, populatePopUp };
