import './style.css';
import addTodo from './modules/addTodo';

const toDosContainer = document.querySelector('.todos-container');
const todoInput = document.querySelector('.todo-input');

let toDos = JSON.parse(localStorage.getItem('todos')) || [];

const displayTodos = () => {
  toDosContainer.innerHTML = "";

  toDos.map(todo => {
    const todoList = document.createElement('li');
    todoList.classList.add('todo-list');

    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add('todo-list-container');

    const todoComplete = document.createElement('input');
    todoComplete.type = 'checkbox';
    todoComplete.value = todo.completed;
    todoComplete.classList.add('todo-complete');
    todoListContainer.appendChild(todoComplete);

    const todoDesc = document.createElement('p');
    todoDesc.textContent = todo.description;
    todoDesc.classList.add('todo-desc');
    todoListContainer.appendChild(todoDesc);

    todoList.appendChild(todoListContainer);

    const moreDiv = document.createElement('div');
    moreDiv.classList.add('more-div');
    
    const threeDots = document.createElement('i');
    threeDots.classList.add('fa-solid', 'fa-ellipsis-vertical');
    moreDiv.appendChild(threeDots);
    todoList.appendChild(moreDiv);

    toDosContainer.appendChild(todoList);
  })
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(toDos, todoInput);
    displayTodos();
  }
});

displayTodos();