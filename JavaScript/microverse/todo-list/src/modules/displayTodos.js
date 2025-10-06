import removeTodo from "./removeTodo";

const toDosContainer = document.querySelector('.todos-container');

const displayTodos = (toDos) => {
  toDosContainer.innerHTML = "";

  toDos.map((todo, index) => {
    const todoList = document.createElement('li');
    todoList.classList.add('todo-list');

    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add('todo-list-container');

    const todoComplete = document.createElement('input');
    todoComplete.type = 'checkbox';
    todoComplete.checked = todo.completed;
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
    threeDots.addEventListener('click', () => {
      threeDots.style.display = 'none';
      const editTodo = document.createElement('i');
      editTodo.classList.add('fa-solid', 'fa-pen-to-square');
      moreDiv.appendChild(editTodo);

      const deleteTodo = document.createElement('i');
      deleteTodo.classList.add('fa-solid', 'fa-trash');
      moreDiv.appendChild(deleteTodo);

      deleteTodo.addEventListener('click', () => {
        removeTodo(toDos, index, displayTodos);
      })
    })
    todoList.appendChild(moreDiv);

    toDosContainer.appendChild(todoList);
  })
};

export default displayTodos;