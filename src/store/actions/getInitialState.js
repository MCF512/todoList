import { FETCH_INITIAL_TODOS } from "../actionNames/actionNames";

const getInitialTodosSuccess = (state) => {
  return {
    type: FETCH_INITIAL_TODOS,
    payload: state
  }
}

export const getInitialTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:3005/todos')
      .then((data) => data.json())
      .then((json) => {
        dispatch(getInitialTodosSuccess(json))
      })
  }
}



