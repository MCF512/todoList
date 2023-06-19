export const handleDelete = (id, refreshTodos) => {
  fetch(`http://localhost:3005/todos/${id}`, {
    method: 'DELETE'
  }).then(() => refreshTodos())
} 