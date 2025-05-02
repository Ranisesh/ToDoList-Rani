
export function loadTodos() {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}

export function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function renderTodos(filter = 'all') {
  const list = document.getElementById('todo-list');
  const todos = loadTodos();
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    if (filter === 'active' && todo.completed) return;
    if (filter === 'completed' && !todo.completed) return;

    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.onclick = () => toggleTodo(index);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => deleteTodo(index);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
