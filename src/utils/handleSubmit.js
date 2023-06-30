export const handleSubmit = (e, id, toChangeValue, refreshTodos, setVisible) => {
  e.preventDefault()

  async function getData() {
    let data = await fetch(`http://localhost:3005/todos/${id}`)
    let json = await data.json()
    return json
  }

  getData()
    .then(json => {
      json.todo = toChangeValue

      fetch(`http://localhost:3005/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(json)
      }).then(() => refreshTodos())
    })

  document.body.style.overflow = 'visible'
  setVisible(false)
}