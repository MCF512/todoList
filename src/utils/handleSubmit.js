import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase';

export const handleSubmit = (e, id, toChangeValue, refreshTodos, setVisible) => {
  e.preventDefault()

  const todoDbRef = ref(db, `todos/${id}`)
  let loadedTodo = {}
  onValue(todoDbRef, (snapshot) => {
    loadedTodo = snapshot.val() || {};
  })

  set(todoDbRef, {
    todo: toChangeValue,
    completed: loadedTodo.completed
  });

  document.body.style.overflow = 'visible'
  setVisible(false)
}