import { useContext } from "react";
import { Context } from "../utils/context";
import { ref, push } from 'firebase/database'
import { db } from '../firebase';

export const useAddTodo = () => {
  const { refreshTodos, setIsAddFormVisible } = useContext(Context)

  function addTodo(e, value) {
    e.preventDefault()
    const todoDbRef = ref(db, 'todos');
    push(todoDbRef, {
      todo: value,
      completed: false,
    }).then(() => {
      document.body.style.overflow = "visible";
      setIsAddFormVisible(false)
    }).then(() => refreshTodos())
  }

  return { addTodo }
}