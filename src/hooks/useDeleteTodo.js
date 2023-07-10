import { useContext } from "react"
import { Context } from "../utils/context"

export const useDelete = (adress) => {
  const { refreshTodos, setIsLoading } = useContext(Context)

  function del() {
    setIsLoading(true)
    fetch(adress, {
      method: 'DELETE'
    }).then(() => refreshTodos())
  }

  return { del }
}