import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { handleSort } from './handleSort';

export const handleLoading = (
  setTodosCompleted,
  setTodosNotCompleted,
  setIsLoading,
  sortDone,
  sortNotDone
) => {
  const todosRef = ref(db, 'todos');

  onValue(todosRef, (snapshot) => {
    const loadedTodos = snapshot.val() || {};

    setTodosCompleted(handleSort(sortDone, Object.entries(loadedTodos).filter(([id, { completed }]) => {
      return completed;
    })))

    setTodosNotCompleted(handleSort(sortNotDone,
      Object.entries(loadedTodos).filter(([id, { completed }]) => {
        return !completed;
      })));
    setIsLoading(false)
  })
};
