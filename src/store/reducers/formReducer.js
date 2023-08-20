import { HIDE_ADD_FORM, HIDE_CHANGE_FORM, SHOW_ADD_FORM, SHOW_CHANGE_FORM } from "../actionNames/actionNames";

const initialState = {
  isAddFormVisible: false,
  isChangeFormVisible: false,
}

export const fromReducer = (state = initialState, action) => {
  switch (action.type) {
    case (SHOW_ADD_FORM): {
      return {
        ...state, isAddFormVisible: true
      }
    }
    case (HIDE_ADD_FORM): {
      return {
        ...state, isAddFormVisible: false
      }
    }
    case (SHOW_CHANGE_FORM): {
      return {
        ...state, isChangeFormVisible: true
      }
    }
    case (HIDE_CHANGE_FORM): {
      return {
        ...state, isChangeFormVisible: false
      }
    }
    default:
      return state
  }
}