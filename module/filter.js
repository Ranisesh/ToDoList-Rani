export function applyFilter() {
  const filter = document.getElementById('filter').value;
  const tasks = document.querySelectorAll('#taskList li');
  tasks.forEach(task => {
    switch(filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
      case "uncompleted":
        task.style.display = !task.classList.contains("completed") ? "flex" : "none";
        break;
    }
  });
}