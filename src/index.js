import "./style.css";
import { createPopUp, populatePopUp } from "./popUpManager";

const newButton = document.getElementById("new-button");
newButton.addEventListener("click", function () {
  createPopUp();
  populatePopUp("form");
});
const projectsButton = document.getElementById("projects-button");
projectsButton.addEventListener("click", function () {
  createPopUp();
});
