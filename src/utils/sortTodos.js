export const sortTodos = (arr, type) => {
  switch (type) {
    case 'noSort':
      break
    case 'A-Z':
      arr.sort((a, b) => {
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
      break
    case 'Z-A':
      arr.sort((a, b) => {
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
  return arr
}