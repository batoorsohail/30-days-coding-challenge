const addTodo = (toDos, todoInput) => {
  let todoInputValue = todoInput.value;
  toDos.push({description: todoInputValue, completed: false});
  localStorage.setItem('todos', JSON.stringify(toDos));
  todoInput.value = "";
};

export default addTodo;