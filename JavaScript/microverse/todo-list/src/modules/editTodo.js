const editTodo = (toDos, index, displayTodos, updatedValue) => {
  toDos[index].description = updatedValue;
  localStorage.setItem('todos', JSON.stringify(toDos));
  displayTodos(toDos);
}

export default editTodo;