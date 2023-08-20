import { DELETE_TODO } from "../actionNames/actionNames";

const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => dispatch(deleteTodoAction(id)))
  }
}