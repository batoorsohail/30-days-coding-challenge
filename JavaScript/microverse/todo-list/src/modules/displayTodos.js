import removeTodo from './removeTodo.js';
import editTodo from './editTodo.js';

const toDosContainer = document.querySelector('.todos-container');

const displayTodos = (toDos) => {
  toDosContainer.innerHTML = '';

  toDos.forEach((todo, index) => {
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
      const editTodoIcon = document.createElement('i');
      editTodoIcon.classList.add('fa-solid', 'fa-pen-to-square');
      moreDiv.appendChild(editTodoIcon);

      editTodoIcon.addEventListener('click', () => {
        const updatingTodoInput = document.createElement('input');
        updatingTodoInput.type = ('text');
        updatingTodoInput.classList.add('updating-todo-input');
        updatingTodoInput.value = todo.description;
        todoDesc.style.display = 'none';
        todoListContainer.appendChild(updatingTodoInput);

        editTodoIcon.style.display = 'none';
        deleteTodo.style.display = 'none';
        const confirmUpdate = document.createElement('i');
        confirmUpdate.classList.add('fa-solid', 'fa-square-check')
        moreDiv.appendChild(confirmUpdate);

        confirmUpdate.addEventListener('click', () => {
          const updatedValue = updatingTodoInput.value;
          editTodo(toDos, index, displayTodos, updatedValue);
          todoDesc.style.display = 'block';
          updatingTodoInput.style.display = 'none';
        })
      })

      const deleteTodo = document.createElement('i');
      deleteTodo.classList.add('fa-solid', 'fa-trash');
      moreDiv.appendChild(deleteTodo);

      deleteTodo.addEventListener('click', () => {
        removeTodo(toDos, index, displayTodos);
      });
    });
    todoList.appendChild(moreDiv);

    toDosContainer.appendChild(todoList);
  });
};

export default displayTodos;