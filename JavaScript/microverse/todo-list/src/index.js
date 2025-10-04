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

    const todoComplete = document.createElement('select');
    todoComplete.textContent = todo.completed;
    todoList.classList.add('todo-complete');
    todoList.appendChild(todoComplete);

    const todoDesc = document.createElement('p');
    todoDesc.textContent = todo.description;
    todoDesc.classList.add('todo-desc');
    todoList.appendChild(todoDesc);

    toDosContainer.appendChild(todoList);
  })
};

displayTodos();