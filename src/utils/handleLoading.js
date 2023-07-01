export const handleLoading = (
  setTodosCompleted,
  setTodosNotCompleted,
  setIsLoading
) => {
  fetch("http://localhost:3005/todos")
    .then((response) => response.json())
    .then((json) => {
      setTodosCompleted(
        json.filter((item) => {
          return item.completed;
        })
      );
      setTodosNotCompleted(
        json.filter((item) => {
          return !item.completed;
        })
      );
    })
    .finally(() => setIsLoading(false));
};
