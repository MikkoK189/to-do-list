import { clearToDos, displayToDoItem } from "./displayToDos";
import { getCurrentProject, saveItems } from "./projects";

function ToDoItem(
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  done
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
  this.done = false;
}

function addToDoItem(event) {
  const currentProject = getCurrentProject();
  let elements = event.target.elements;
  const toDo = new ToDoItem(
    elements["title"].value,
    elements["description"].value,
    elements["date"].value,
    elements["priority"].value
  );
  currentProject.toDoArray.push(toDo);
  sortToDos();
  event.target.reset();
}

function markAsDone(index, value) {
  const currentProject = getCurrentProject();
  currentProject.toDoArray[index].done = value;
  sortToDos();
}

function getToDoItem(index) {
  const currentProject = getCurrentProject();
  return currentProject.toDoArray[index];
}

function removeToDoItem(index) {
  const currentProject = getCurrentProject();
  currentProject.toDoArray.splice(index, 1);
  sortToDos();
}

function sortToDos() {
  const currentProject = getCurrentProject();
  currentProject.toDoArray.sort(function comparePriority(a, b) {
    return parseInt(a.priority) - parseInt(b.priority);
  });
  clearToDos();
  for (let i = 0; i < currentProject.toDoArray.length; i++) {
    displayToDoItem(currentProject.toDoArray[i], i);
  }
  saveItems();
}

export { addToDoItem, getToDoItem, removeToDoItem, sortToDos, markAsDone };
