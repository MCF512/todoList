import { ADD_TODO, CHANGE_TODO, DELETE_TODO, FETCH_INITIAL_TODOS, SET_CURRENT_TODO_STATE, SET_SEARCHED_TODOS } from "../actionNames/actionNames"

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case (FETCH_INITIAL_TODOS): {
      return [...action.payload]
    }
    case (SET_CURRENT_TODO_STATE): {
      const filteredState = state.filter((todo) => {
        return todo.id !== action.payload.id
      })
      return [...filteredState, action.payload]
    }
    case (ADD_TODO): {
      return [...state, action.payload]
    }
    case (CHANGE_TODO): {
      const filteredState = state.filter((todo) => {
        return todo.id !== action.payload.id
      })
      return [...filteredState, action.payload]
    }
    case (SET_SEARCHED_TODOS): {
      return [...action.payload]
    }
    case (DELETE_TODO): {
      const filteredState = state.filter((todo) => {
        return todo.id !== action.payload
      })
      return [...filteredState]
    }
    default:
      return state
  }
}