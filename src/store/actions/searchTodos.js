import { debounce } from "../../utils/debounce";
import { SET_SEARCHED_TODOS } from "../actionNames/actionNames";

const setSearchedTodos = (data) => {
  return {
    type: SET_SEARCHED_TODOS,
    payload: data
  }
}

export const searchTodos = (value) => {
  return (dispatch) => {
    fetch('http://localhost:3005/todos')
      .then((data) => data.json())
      .then((json) => {
        const findedData = json.filter((todo) => {
          return todo.todo.toLowerCase().includes(value.toLowerCase())
        })
        dispatch(setSearchedTodos(findedData))
        console.log(value)
      })
  }
}