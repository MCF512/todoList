import { useContext } from "react";
import { Context } from "../utils/context";
import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase';

export const useChangeTodo = () => {
  const { setIsChangeFormVisible, setIdToChange, setValueToChange, idToChange, setIsLoading } = useContext(Context);


  function setChangingTodo(id) {
    setIsLoading(true)
    setIdToChange(id);
    const todoDbRef = ref(db, `todos/${id}`);

    onValue(todoDbRef, (snapshot) => {
      const loadedTodo = snapshot.val() || [];
      setValueToChange(loadedTodo.todo);
      document.body.style.overflow = 'hidden'
      setIsLoading(false)
      setIsChangeFormVisible(true)
    })

    console.log('setCangingTodo')
  }

  function submitChangingTodo(e, value) {
    e.preventDefault()
    const todoDbRef = ref(db, `todos/${idToChange}`);
    let loadedTodo = {}
    onValue(todoDbRef, (snapshot) => {
      loadedTodo = snapshot.val() || {};
    })

    set(todoDbRef, {
      todo: value,
      completed: loadedTodo.completed
    });

    document.body.style.overflow = 'visible'
    setValueToChange('')
    setIsChangeFormVisible(false);
  }

  return { setChangingTodo, submitChangingTodo }
}