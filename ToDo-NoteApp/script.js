const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">×</button>
  `;
  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
