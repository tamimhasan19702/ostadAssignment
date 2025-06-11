/** @format */

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const alertArea = document.getElementById("alert-area");

window.addEventListener("DOMContentLoaded", () => {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => addTaskToDOM(task.text, task.completed));
  updateTaskCount();
});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    showAlert("Please enter a task!", "danger");
    return;
  }

  const newTask = {
    text: taskText,
    completed: false,
  };

  addTaskToDOM(taskText, false);
  saveTaskToLocalStorage(newTask);
  taskInput.value = "";
  updateTaskCount();
  showAlert(`Task added successfully!`, "success");
});

function addTaskToDOM(taskText, isCompleted) {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  if (isCompleted) {
    taskSpan.classList.add("completed");
  }

  taskSpan.style.cursor = "pointer";
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
    updateTaskInLocalStorage(taskSpan.parentElement, taskSpan.textContent);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    removeTaskFromLocalStorage(taskSpan.textContent);
    updateTaskCount();
  });

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function removeTaskFromLocalStorage(taskText) {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInLocalStorage(listItem, taskText) {
  const span = listItem.querySelector("span");
  const completed = span.classList.contains("completed");

  let tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex((task) => task.text === taskText);
  if (taskIndex > -1) {
    tasks[taskIndex].completed = completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function updateTaskCount() {
  taskCount.textContent = taskList.children.length;
}

function showAlert(message, type = "success") {
  const alertHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
  alertArea.innerHTML = alertHTML;
}
