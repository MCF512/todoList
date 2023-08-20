import { ADD_TODO, HIDE_ADD_FORM } from "../actionNames/actionNames";

const addTodoAction = (data) => {
  return {
    type: ADD_TODO,
    payload: data
  }
}

const hideAddFormAction = () => {
  return {
    type: HIDE_ADD_FORM
  }
}

export const addTodo = (value, setAddTodoValue) => {
  const ID = Math.floor(Math.random() * 10000000);

  const newTodo = {
    id: ID,
    todo: value,
    completed: false
  }

  document.body.style.overflow = "visible";
  setAddTodoValue('')

  return (dispatch) => {
    fetch(`http://localhost:3005/todos/`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(newTodo),
    })
      .then(() => dispatch(addTodoAction(newTodo)))
      .then(() => dispatch(hideAddFormAction()))
  }
}