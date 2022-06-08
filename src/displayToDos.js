import { format, compareAsc } from "date-fns";
import { createPopUp, populatePopUp } from "./popUpManager";
format(new Date(2014, 1, 11), "MM/dd/yyyy");

function displayToDoItem(toDoItem, id) {
  console.log(toDoItem);
  const itemContainer = document.getElementById("todos-container");

  const toDoCard = document.createElement("div");
  toDoCard.classList.add("todo-card");
  toDoCard.id = id;
  toDoCard.addEventListener("click", function (event) {
    createPopUp();
    populatePopUp("todo", event.target.id);
  });

  const titleElement = document.createElement("h1");
  titleElement.textContent = toDoItem.title;
  toDoCard.appendChild(titleElement);

  const dateElement = document.createElement("div");
  const dateArray = toDoItem.dueDate.split("-");
  console.log(dateArray);
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
