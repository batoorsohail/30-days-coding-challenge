const removeTodo = (toDos, index, displayTodos) => {
  toDos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(toDos));
  displayTodos(toDos);
};

export default removeTodo;