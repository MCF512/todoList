export const handleLoading = (needToSort, setTodosCompleted, setTodosNotCompleted) => {
  fetch('http://localhost:3005/todos')
    .then(response => response.json())
    .then(json => {
      if (needToSort) json.sort((a, b) => {
        const todoA = a.todo.toUpperCase();
        const todoB = b.todo.toUpperCase();
        if (todoA < todoB) {
          return -1;
        }
        if (todoA > todoB) {
          return 1;
        }

        return 0;
      });
      setTodosCompleted(json.filter(item => {
        return item.completed
      }))
      setTodosNotCompleted(json.filter(item => {
        return !item.completed
      }))
    })
}