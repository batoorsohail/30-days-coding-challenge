const clearCompletedTodos = (toDos, displayTodos) => {
  const updatedTodos = toDos.filter((todo) => !todo.completed);
  toDos.length = 0;
  toDos.push(...updatedTodos);
  localStorage.setItem('todos', JSON.stringify(toDos));
  displayTodos(toDos);
};

export default clearCompletedTodos;