export const handleSearch = (value, setTodosCompleted, setTodosNotCompleted, refresh) => {
  // e.preventDefault();

  fetch('http://localhost:3005/todos')
    .then(response => response.json())
    .then(json => {
      setTodosCompleted(json.filter(item => {
        return item.todo.includes(value) && item.completed
      }))
      setTodosNotCompleted(json.filter(item => {
        return item.todo.includes(value) && !item.completed
      }))
    })
}