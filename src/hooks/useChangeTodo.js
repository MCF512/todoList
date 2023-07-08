import { useState, useContext } from "react";
import { Context } from "../utils/context";

export const useChangeTodo = (adress) => {
  const { setIsChangeFormVisible, setIdToChange, setValueToChange, idToChange, refreshTodos, setIsLoading } = useContext(Context);

  function setChangingTodo(id) {
    setIsLoading(true)
    setIdToChange(id);
    fetch(`${adress}/${id}`)
      .then(res => res.json())
      .then(json => {
        setValueToChange(json.todo);
      })
      .then(() => {
        document.body.style.overflow = 'hidden'
        setIsChangeFormVisible(true)
        setIsLoading(false)
      })
  }

  function submitChangingTodo(value) {
    setIsLoading(true)
    fetch(`${adress}/${idToChange}`, {
      method: 'PATCH',
      body: JSON.stringify({
        todo: value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => refreshTodos())
  }

  return { setChangingTodo, submitChangingTodo }
}