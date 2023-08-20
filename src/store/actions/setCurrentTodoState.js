import { SET_CURRENT_TODO_STATE } from "../actionNames/actionNames";

const setCompleted = (data, id) => {
  fetch(`http://localhost:3005/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: !data.completed
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

  return {
    type: SET_CURRENT_TODO_STATE,
    payload: { ...data, completed: !data.completed }
  }
}

export const setCurrentTodoState = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3005/todos/${id}`)
      .then((data) => data.json())
      .then((json) => dispatch(setCompleted(json, id)))
  }
}