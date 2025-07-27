
  const addBtn = document.querySelector("button");
  const taskInput = document.querySelector("input");
  const todoList = document.querySelector(".todo-list");

  // Load existing tasks from localStorage
  function loadTasks() {
    const todos = JSON.parse(localStorage.getItem("todo")) || [];
    todoList.innerHTML = "";
    todos.forEach((task, index) => {
      addTaskToDOM(task, index);
    });
  }

  // Add task to DOM
  function addTaskToDOM(task, index) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "&times;";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  }

  // Add task
  addBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task === "") return;

    const todos = JSON.parse(localStorage.getItem("todo")) || [];
    todos.push(task);
    localStorage.setItem("todo", JSON.stringify(todos));

    taskInput.value = "";
    loadTasks();
  });

  // Delete task
  function deleteTask(index) {
    const todos = JSON.parse(localStorage.getItem("todo")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    loadTasks();
  }

  // Run when page loads
  window.addEventListener("DOMContentLoaded", loadTasks);