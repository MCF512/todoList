import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase';

export const handleDone = (id, refresh, setIsLoading) => {
  setIsLoading(true)
  const todoDbRef = ref(db, `todos/${id}`)
  let loadedTodo = {}
  onValue(todoDbRef, (snapshot) => {
    loadedTodo = snapshot.val() || {};
  })

  set(todoDbRef, {
    todo: loadedTodo.todo,
    completed: !loadedTodo.completed
  }).then(() => setIsLoading(false))
}