import { useContext } from "react"
import { Context } from "../utils/context"

export const useClickOnCheckbox = (adress) => {
  const { refreshTodos, setIsLoading } = useContext(Context)

  function clickOnCheckbox() {
    setIsLoading(true)
    fetch(adress)
      .then(res => res.json())
      .then(json => {
        json.completed = !json.completed

        fetch(adress, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(json)
        }).then(() => {
          refreshTodos()
        })
      })
  }

  return { clickOnCheckbox }
} 