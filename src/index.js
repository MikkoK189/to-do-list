import "./style.css";
import createBase from "./createBaseHTML";

createBase();

const newButton = document.getElementById("new-button");
newButton.addEventListener("click", function () {
  console.log("TEST");
});
const projectsButton = document.getElementById("projects-button");
projectsButton.addEventListener("click", function () {
  console.log("PROJECTS");
});
