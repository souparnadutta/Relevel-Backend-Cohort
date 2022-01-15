const inputTaskBtn = document.getElementById("add-task-btn");
const inputTaskTxt = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const completedList=document.getElementById("completed-task-list")


function resetNewTaskInput() {
  inputTaskTxt.value = "";
}

function setNewTaskLabel(newTaskElement) {
  const taskDetails = inputTaskTxt.value;
  const newTaskLabel = document.createElement("label");
  newTaskLabel.innerText = taskDetails;
  newTaskLabel.className = "task-label";
  newTaskElement.appendChild(newTaskLabel);
}

function setNewTaskButton(newTaskElement) {
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Mark as Done";
  doneBtn.className = "done-btn";
  newTaskElement.appendChild(doneBtn);
}

function setDoneBtnOnClick(task) {
  const doneBtn = task.querySelector(".done-btn");
  doneBtn.onclick = markAsDoneHandler;
}



function populateNewTaskElement(newTaskElement) {
  setNewTaskLabel(newTaskElement);
  setNewTaskButton(newTaskElement);
  setDoneBtnOnClick(newTaskElement);
}


function createNewTaskHandler() {
  if (inputTaskTxt.value === "") return;
  const newTaskElement = document.createElement("li");
  populateNewTaskElement(newTaskElement);
  taskList.appendChild(newTaskElement);
  resetNewTaskInput();
}

function markAsDoneHandler() {
  
  const taskElement = this.parentNode;

  console.log(taskElement);
  
  const tl = taskElement.parentNode;
  
  tl.removeChild(taskElement);              //Removed task from 'to be done' list

  completedList.appendChild(taskElement);    //Added task to completed list

  taskElement.id="completed-list";          //For changing the style of numbers in the list in the CSS File (Red for to be done list and Green for completed list)

  taskElement.removeChild(taskElement.childNodes[1]); // Removing the mark as done butto from the tasks in completed list
  

}

  
      

inputTaskBtn.onclick = createNewTaskHandler;

document.addEventListener("keydown", function (event) {
  if (event.code !== "Enter") return;
  createNewTaskHandler();
});