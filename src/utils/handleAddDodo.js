import { ref, push } from 'firebase/database'
import { db } from '../firebase';

export const handleAddTodo = (
  e,
  addTodoValue,
  setAddTodoValue,
  refreshTodos,
  setVisible,
  setIsLoading
) => {
  e.preventDefault();

  if (addTodoValue) {
    setIsLoading(true);
    const todoDbRef = ref(db, 'todos');
    push(todoDbRef, {
      todo: addTodoValue,
      completed: false,
    }).then(() => {
      document.body.style.overflow = "visible";
      setIsLoading(false);
    });

    setAddTodoValue("");
    setVisible(false);
  }
};
