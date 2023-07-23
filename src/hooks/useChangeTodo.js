import { useContext } from "react";
import { Context } from "../utils/context";

export const useChangeTodo = (adress) => {
  const { setIsUpdating } = useContext(Context);

  function submitChangingTodo(value, id) {
    setIsUpdating(true)
    fetch(`${adress}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        todo: value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => {
        setIsUpdating(false)
      })
  }

  return { submitChangingTodo }
}