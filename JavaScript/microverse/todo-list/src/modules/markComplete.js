const markComplete = (toDos, index) => {
  if (toDos[index].completed === false) {
    toDos[index].completed = true;
    localStorage.setItem('todos', JSON.stringify(toDos));
  } else {
    toDos[index].completed = false;
    localStorage.setItem('todos', JSON.stringify(toDos));
  }
};

export default markComplete;