import { format, compareAsc } from "date-fns";
import { markAsDone } from "./handleToDos";
import { createPopUp, populatePopUp } from "./popUpManager";
format(new Date(2014, 1, 11), "MM/dd/yyyy");

function displayToDoItem(toDoItem, id) {
  const itemContainer = document.getElementById("todos-container");

  const toDoCard = document.createElement("div");
  toDoCard.classList.add("todo-card");
  toDoCard.id = id;
  toDoCard.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo-card")) {
      createPopUp();
      populatePopUp("todo", event.target.id);
    }
  });
  const leftSideContainer = document.createElement("div");
  leftSideContainer.id = "left-container";

  const checkBoxElement = document.createElement("input");
  checkBoxElement.type = "checkbox";
  checkBoxElement.classList.add("checkbox");
  checkBoxElement.id = id;
  checkBoxElement.checked = toDoItem.done;
  if (checkBoxElement.checked) {
    toDoCard.classList.add("completed");
  }
  checkBoxElement.addEventListener("click", function (event) {
    document.getElementById(`${event.target.id}`).classList.toggle("completed");
    markAsDone(event.target.id, checkBoxElement.checked);
  });
  leftSideContainer.appendChild(checkBoxElement);

  const titleElement = document.createElement("h1");
  titleElement.textContent = toDoItem.title;
  if (toDoItem.title.length > 15) {
    let newTitle = toDoItem.title.slice(0, 14);
    newTitle += "...";
    titleElement.textContent = newTitle;
  }
  leftSideContainer.appendChild(titleElement);
  toDoCard.appendChild(leftSideContainer);

  const dateElement = document.createElement("div");
  const dateArray = toDoItem.dueDate.split("-");

  dateElement.textContent = format(
    new Date(dateArray[0], dateArray[1], dateArray[2]),
    "dd.MM.yy"
  );
  toDoCard.appendChild(dateElement);

  itemContainer.appendChild(toDoCard);
}

function clearToDos() {
  const gridContent = document.getElementById("todos-container");

  while (gridContent.firstChild) {
    gridContent.removeChild(gridContent.lastChild);
  }
}

export { displayToDoItem, clearToDos };
