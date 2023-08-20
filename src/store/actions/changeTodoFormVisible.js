import { SHOW_CHANGE_FORM, HIDE_CHANGE_FORM } from "../actionNames/actionNames";

export const showChangeForm = () => {
  document.body.style.overflow = 'hidden';
  return { type: SHOW_CHANGE_FORM }
}

export const hideChangeForm = () => {
  document.body.style.overflow = "visible";
  return { type: HIDE_CHANGE_FORM }
}