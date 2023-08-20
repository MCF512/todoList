import { SHOW_ADD_FORM, HIDE_ADD_FORM } from "../actionNames/actionNames";

export const showAddForm = () => {
  document.body.style.overflow = 'hidden';
  return { type: SHOW_ADD_FORM }
}

export const hideAddForm = (setAddTodoValue) => {
  document.body.style.overflow = "visible";
  setAddTodoValue('')
  return { type: HIDE_ADD_FORM }
}