export const handleSort = (sortType, setTodosCompleted, setTodosNotCompleted, sortDoneTodos) => {
  fetch('http://localhost:3005/todos')
    .then(response => response.json())
    .then(json => {
      switch (sortType) {
        case 'noSort':
          break
        case 'A-Z':
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
          })
          break
        case 'Z-A':
          json.sort((a, b) => {
            const todoA = a.todo.toUpperCase();
            const todoB = b.todo.toUpperCase();
            if (todoA < todoB) {
              return 1;
            }
            if (todoA > todoB) {
              return -1;
            }

            return 0;
          })
          break
      }

      if (sortDoneTodos) {
        setTodosCompleted(json.filter(item => {
          return item.completed
        }))
      } else {
        setTodosNotCompleted(json.filter(item => {
          return !item.completed
        }))
      }
    })
}