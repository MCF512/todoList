export const handleSort = (sortType, todos) => {
  switch (sortType) {
    case 'noSort':
      return todos
    case 'A-Z':
      return todos.sort((a, b) => {
        const todoA = a[1].todo.toUpperCase();
        const todoB = b[1].todo.toUpperCase();
        if (todoA < todoB) {
          return -1;
        }
        if (todoA > todoB) {
          return 1;
        }

        return 0;
      })
    case 'Z-A':
      return todos.sort((a, b) => {
        const todoA = a[1].todo.toUpperCase();
        const todoB = b[1].todo.toUpperCase();
        if (todoA < todoB) {
          return 1;
        }
        if (todoA > todoB) {
          return -1;
        }

        return 0;
      })
  }
}

