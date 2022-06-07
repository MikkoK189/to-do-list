const toDoArray = [];

function ToDoItem(title, description, dueDate, priority, notes, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

function addToDoItem(event) {
  let elements = event.target.elements;
  const toDo = new ToDoItem(
    elements["title"].value,
    elements["description"].value,
    elements["date"].value,
    elements["priority"].value
  );
  toDoArray.push(toDo);
  toDoArray.sort(function comparePriority(a, b) {
    return parseInt(a.priority) - parseInt(b.priority);
  });
  console.log(toDoArray);
  event.target.reset();
}

export { addToDoItem };
