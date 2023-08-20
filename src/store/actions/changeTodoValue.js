import { CHANGE_TODO } from "../actionNames/actionNames";
import { hideChangeForm } from "./changeTodoFormVisible";

const chagngeTodoAction = (data) => {
  return {
    type: CHANGE_TODO,
    payload: data
  }
}

export const changeTodo = (id, value) => {
  return (dispatch) => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        todo: value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((data) => data.json())
      .then((json) => dispatch(chagngeTodoAction(json)))
      .then(() => dispatch(hideChangeForm()))
  }
}