export const handleSearch = (value, setTodosCompleted, setTodosNotCompleted) => {

  fetch('http://localhost:3005/todos')
    .then(response => response.json())
    .then(json => {
      setTodosCompleted(json.filter(item => {
        return item.todo.toLowerCase().includes(value.toLowerCase()) && item.completed
      }))
      setTodosNotCompleted(json.filter(item => {
        return item.todo.toLowerCase().includes(value.toLowerCase()) && !item.completed
      }))
    })
}