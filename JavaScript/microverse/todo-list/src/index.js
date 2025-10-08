import './style.css';
import displayTodos from './modules/displayTodos.js';
import addTodo from './modules/addTodo.js';
import clearCompletedTodos from './modules/clearCompletedTodos.js';

const toDos = JSON.parse(localStorage.getItem('todos')) || [];

const todoInput = document.querySelector('.todo-input');
const clearAllCompleteTodosBtn = document.querySelector('.clear-all-btn')

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(toDos, todoInput);
    displayTodos(toDos);
  }
});

clearAllCompleteTodosBtn.addEventListener('click', () => {
  clearCompletedTodos(toDos, displayTodos);
});

displayTodos(toDos);