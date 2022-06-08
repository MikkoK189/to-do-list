import "./style.css";
import { createPopUp, populatePopUp } from "./popUpManager";
import { loadItems } from "./projects";
import { sortToDos } from "./handleToDos";

const newButton = document.getElementById("new-button");
newButton.addEventListener("click", function () {
  createPopUp();
  populatePopUp("form", 0);
});
const projectsButton = document.getElementById("projects-button");
projectsButton.addEventListener("click", function () {
  createPopUp();
  populatePopUp("projectList", 0);
});

loadItems();
sortToDos();
