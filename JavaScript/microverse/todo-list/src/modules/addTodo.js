const addTodo = (toDos, todoInput) => {
  const todoInputValue = todoInput.value;
  
  if (todoInputValue === '') {
    throw new Error('Input should have a value');
  } else {
    toDos.push({ description: todoInputValue, completed: false });
    localStorage.setItem('todos', JSON.stringify(toDos));
    todoInput.value = '';
  }
};

export default addTodo;