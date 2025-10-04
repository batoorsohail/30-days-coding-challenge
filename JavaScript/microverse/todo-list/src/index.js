import './style.css';

const toDosContainer = document.querySelector('.todos-container');

const toDos = [
  {
    description: "Read 10 pages of a book",
    completed: false,
    index: 1
  },
  {
    description: "Exercising for 1 hour",
    completed: false,
    index: 2
  },
  {
    description: "Coding for 1 hour",
    completed: false,
    index: 3
  },
  {
    description: "Study for 1 hour",
    completed: false,
    index: 4
  }
];

const displayTodos = () => {
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

displayTodos();