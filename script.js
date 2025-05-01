import { addTask, renderTasks } from './module/main.js';
import { applyFilter } from './module/filter.js';

document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('filter').addEventListener('change', applyFilter);

document.addEventListener('DOMContentLoaded', renderTasks);