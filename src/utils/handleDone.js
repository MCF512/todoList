export const handleDone = (id, refresh) => {
  fetch(`http://localhost:3005/todos/${id}`)
    .then(res => res.json())
    .then(json => {
      json.completed = !json.completed

      fetch(`http://localhost:3005/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(json)
      }).then(() => refresh())
    })
}