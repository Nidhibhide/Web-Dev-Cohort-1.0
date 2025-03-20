// Selecting the necessary DOM elements
const AddnewTaskBtn = document.querySelector(".btn"); // Button to open the new task form
const overlay = document.querySelector(".overlay"); // Overlay to show when the form is active
const AddnewItemForm = document.querySelector(".newTask"); // The form for adding a new task
const cancelbtn = document.getElementById("cancelBtn"); // Cancel button to close the form
const taskForm = document.getElementById("taskForm"); // The task form element
const inputField = document.querySelectorAll(".inputField"); // Input fields in the form
const tasklist = document.querySelector(".task-list"); // Container for the task list
const DoingTaskList = document.getElementById("DoingTask-List"); // Task list for tasks in 'Doing' state
const DoingBoard = document.getElementById("DoingBoard"); // Board where 'Doing' tasks are displayed
const DoneTaskList = document.getElementById("DoneTask-List"); // Task list for tasks in 'Done' state
const DoneBoard = document.getElementById("DoneBoard"); // Board where 'Done' tasks are displayed

// Function to clear the input fields in the task form
const clearForm = (inputField) => {
  inputField.forEach((val) => {
    val.value = ""; // Clear each input field
  });
};

// Function to create and add a new task to the specified container (NewTask)
const NewTaskFun = (val, NewTask) => {
  const taskElement = document.createElement("p");
  taskElement.innerText = `${val.value}`;
  NewTask.appendChild(taskElement); // Return the task element
  return taskElement;
};

// Event listener to show the task form when 'AddnewTaskBtn' is clicked
AddnewTaskBtn.addEventListener("click", () => {
  AddnewItemForm.classList.add("active");
  overlay.classList.add("active");
  clearForm(inputField);
});

// Event listener to close the task form when 'cancelbtn' is clicked
cancelbtn.addEventListener("click", () => {
  AddnewItemForm.classList.remove("active");
  overlay.classList.remove("active");
});

// Store the currently dragged task
let draggedTask = null;

// Event listener for adding a new task when the task form is submitted
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const NewTask = document.createElement("div");
  NewTask.classList.add("task", "DoTask");
  NewTask.setAttribute("draggable", "true");

  // Loop through input fields and add the task to the container
  inputField.forEach((val, index) => {
    if (index == 0) {
      const taskElement = NewTaskFun(val, NewTask);
      taskElement.classList.add("taskTitle");
    } else {
      NewTaskFun(val, NewTask);
    }
  });

  tasklist.appendChild(NewTask);
  // Update To-Do Task Count
  const Dototaltasks = document.querySelector(".Dototaltasks");
  // Dototaltasks.innerText = Number(Dototaltasks.innerText) + 1;
  incrementTask(Dototaltasks);

  AddnewItemForm.classList.remove("active");
  overlay.classList.remove("active");
});

// Use event delegation to handle dragstart for all tasks
document.addEventListener("dragstart", (event) => {
  if (event.target.classList.contains("task")) {
    draggedTask = event.target;
  }
});

// Function to enable drop functionality for a given board (DoingBoard/DoneBoard)
const enableDrop = (
  board,
  target,
  removeClass,
  addClass,
  plusTask,
  MinusTask
) => {
  // Allow dragging over the board
  board.addEventListener("dragover", (event) => {
    event.preventDefault(); // Prevent the default behavior to allow drop
  });

  // Handle the drop event when a task is dropped onto the board
  board.addEventListener("drop", () => {
    if (draggedTask) {
      draggedTask.classList.replace(removeClass, addClass);

      incrementTask(plusTask);
      derementTask(MinusTask);

      target.appendChild(draggedTask);
      draggedTask = null;
    }
  });
};

// Function to increment the task count for a board
const incrementTask = (totaltasks) => {
  totaltasks.innerText = Number(totaltasks.innerText) + 1;
};

// Function to decrement the task count for a board
const derementTask = (totaltasks) => {
  totaltasks.innerText = Math.max(0, Number(totaltasks.innerText) - 1);
};

// Enable the drop functionality for the Doing and Done boards
enableDrop(
  DoingBoard,
  document.getElementById("DoingTask-List"),
  "DoTask",
  "DoingTask",
  document.querySelector(".Doingtotaltasks"),
  document.querySelector(".Dototaltasks")
);
enableDrop(
  DoneBoard,
  document.getElementById("DoneTask-List"),
  "DoingTask",
  "DidTask",
  document.querySelector(".Donetotaltasks"),
  document.querySelector(".Doingtotaltasks")
);
