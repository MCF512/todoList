import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const handleSearch = (
  value,
  setTodosCompleted,
  setTodosNotCompleted,
  setIsLoading
) => {
  setIsLoading(true);

  const todosRef = ref(db, 'todos');

  onValue(todosRef, (snapshot) => {
    const loadedTodos = snapshot.val() || {};
    setTodosCompleted(Object.entries(loadedTodos).filter(([id, { todo, completed }]) => {
      return completed && todo.toLowerCase().includes(value.toLowerCase())
    }))
    setTodosNotCompleted(Object.entries(loadedTodos).filter(([id, { todo, completed }]) => {
      return !completed && todo.toLowerCase().includes(value.toLowerCase())
    }))
    setIsLoading(false)
  })
};
