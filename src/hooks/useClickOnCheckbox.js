import { useContext } from "react"
import { Context } from "../utils/context"
import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase';

export const useClickOnCheckbox = () => {
  const { refreshTodos, setIsLoading, setIsChangeFormVisible } = useContext(Context)

  function clickOnCheckbox(id) {
    setIsLoading(true)

    const todoDbRef = ref(db, `todos/${id}`)
    let loadedTodo = {}
    onValue(todoDbRef, (snapshot) => {
      loadedTodo = snapshot.val() || {};
      setIsChangeFormVisible(false)
    })


    set(todoDbRef, {
      todo: loadedTodo.todo,
      completed: !loadedTodo.completed
    }).then(() => refreshTodos())
  }

  return { clickOnCheckbox }
} 