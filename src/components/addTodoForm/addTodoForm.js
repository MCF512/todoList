import { useState } from "react"

export const AddTodoForm = ({ refreshTodos }) => {
  const [addTodoValue, setAddTodoValue] = useState('')

  const addTodo = (e) => {
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
    }
  }

  return (
    <form onSubmit={(e) => addTodo(e)}>
      <input
        onChange={(e) => setAddTodoValue(e.target.value)}
        value={addTodoValue}
        type="text" />
      <button type="submit">Добавить задачу</button>
    </form>
  )
}