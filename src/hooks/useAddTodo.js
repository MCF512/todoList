import { useContext } from "react";
import { Context } from "../utils/context";

export const useAddTodo = (adress) => {
  const { refreshTodos, setIsAddFormVisible } = useContext(Context)

  function addTodo(e, value) {
    e.preventDefault()
    const ID = Math.floor(Math.random() * 10000000);
    fetch(adress, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: ID,
        todo: value,
        completed: false,
      }),
    }).then(() => {
      setIsAddFormVisible(false)
      refreshTodos()
    })
  }

  return { addTodo }
}