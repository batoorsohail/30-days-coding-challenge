import './style.css';
import displayTodos from './modules/displayTodos';
import addTodo from './modules/addTodo';

let toDos = JSON.parse(localStorage.getItem('todos')) || [];

const todoInput = document.querySelector('.todo-input');

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(toDos, todoInput);
    displayTodos(toDos);
  }
});

displayTodos(toDos);