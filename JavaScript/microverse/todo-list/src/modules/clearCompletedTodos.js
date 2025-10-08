const clearCompletedTodos = (toDos, displayTodos) => {
  toDos = toDos.filter(todo => !todo.completed);
  localStorage.setItem('todos', JSON.stringify(toDos));
  displayTodos(toDos);
}

export default clearCompletedTodos;