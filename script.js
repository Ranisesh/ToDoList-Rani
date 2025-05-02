
import { loadTodos, saveTodos, renderTodos } from './module/main.js';

window.addEventListener('DOMContentLoaded', () => {
  renderTodos('all');
});

window.addTodo = function () {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text) {
    const todos = loadTodos();
    todos.push({ text, completed: false });
    saveTodos(todos);
    renderTodos('all');
    input.value = '';
  }
};

window.toggleTodo = function (index) {
  const todos = loadTodos();
  todos[index].completed = !todos[index].completed;
  saveTodos(todos);
  renderTodos('all');
};

window.deleteTodo = function (index) {
  const todos = loadTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodos('all');
};

window.filterTodos = function (filter) {
  renderTodos(filter);
};
