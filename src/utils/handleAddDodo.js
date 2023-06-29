export const handleAddTodo = (e, addTodoValue, setAddTodoValue, refreshTodos, setVisible) => {
  e.preventDefault()
  const ID = Math.floor(Math.random() * 10000)

  if (addTodoValue) {
    fetch(`http://localhost:3005/todos/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        id: ID,
        todo: addTodoValue,
        completed: false
      })
    }).then(() => refreshTodos())

    setAddTodoValue('')
    setVisible(false)
  }
}