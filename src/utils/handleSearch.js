export const handleSearch = (
  value,
  setTodosCompleted,
  setTodosNotCompleted,
  setIsLoading
) => {
  setIsLoading(true);

  fetch("http://localhost:3005/todos")
    .then((response) => response.json())
    .then((json) => {
      setTodosCompleted(
        json.filter((item) => {
          return (
            item.completed &&
            item.todo.toLowerCase().includes(value.toLowerCase())
          );
        })
      );
      setTodosNotCompleted(
        json.filter((item) => {
          return (
            !item.completed &&
            item.todo.toLowerCase().includes(value.toLowerCase())
          );
        })
      );
    })
    .finally(() => setIsLoading(false));
};
