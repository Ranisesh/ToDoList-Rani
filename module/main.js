export function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = "";
}

export function renderTasks() {
  // Placeholder for future saved tasks
}