const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addButton.addEventListener("click", () => {
  let totalT = totalTasks.innerText.charAt(totalTasks.innerText.length - 1);

  //create list
  const ListItem = document.createElement("li");
  ListItem.classList.add("task-item");

  //create div
  const divEle = document.createElement("div");
  divEle.classList.add("task-text");

  //cretae checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkBox";
  checkBox.classList.add("complete-checkbox");

  //create span elelment
  const span = document.createElement("span");

  //create delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-button");

  //append elements
  taskList.appendChild(ListItem);
  ListItem.appendChild(divEle);
  divEle.appendChild(checkBox);
  span.innerText = taskInput.value;
  divEle.appendChild(span);
  ListItem.appendChild(delBtn);

  console.log(ListItem);

  //update ttotal task
  if (totalT == "0") {
    const emptylist = document.getElementsByClassName("empty-list")[0];
    taskList.removeChild(emptylist);
  }

  totalTasks.innerText = `Total tasks: ${1 + Number(totalT)}`;

  //clear input field
  taskInput.value = "";
  taskInput.placeholder = "Add a new task...";

  // Mark task as completed
  checkBox.addEventListener("change", () => {
    ListItem.classList.toggle("completed", checkBox.checked);
  });
  delBtn.addEventListener("click", () => {
    if (checkBox.checked) {
      totalT = totalTasks.innerText.charAt(totalTasks.innerText.length - 1);
      totalTasks.innerText = `Total tasks: ${Number(totalT) - 1}`;
      let completedT = completedTasks.innerText.charAt(
        completedTasks.innerText.length - 1
      );
      completedTasks.innerText = `Completed: ${Number(completedT) + 1}`;
      ListItem.remove();
    }
  });
});
