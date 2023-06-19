export const handleSort = (e, refreshTodos) => {
  e.preventDefault()

  async function getData() {
    let data = await fetch(`http://localhost:3005/todos/`)
    let json = await data.json()
    // console.log(json)
    return json
  }

  getData()
    .then(json => {
      console.log(json)
      json.sort((a, b) => {
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
      console.log(json)
    })
}