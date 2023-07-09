import { useContext } from "react";
import { Context } from "../utils/context";
import { ref, onValue } from 'firebase/database';
import { db } from "../firebase";


export const useGetTodos = () => {
  const { setTodosCompleted, setTodosNotCompleted, setIsLoading, searchValue, sortDoneTodos, sortNotDoneTodos } = useContext(Context);

  function sortTodos(sortType, obj) {
    switch (sortType) {
      case 'noSort':
        break
      case 'A-Z':
        obj.sort((a, b) => {
          const todoA = a[1].todo.toUpperCase();
          const todoB = b[1].todo.toUpperCase();
          if (todoA < todoB) {
            return -1;
          }
          if (todoA > todoB) {
            return 1;
          }

          return 0;
        });
        break
      case 'Z-A':
        obj.sort((a, b) => {
          const todoA = a[1].todo.toUpperCase();
          const todoB = b[1].todo.toUpperCase();
          if (todoA < todoB) {
            return 1;
          }
          if (todoA > todoB) {
            return -1;
          }

          return 0;
        })
        break
    }
    return obj
  }

  function loadTodos() {
    setIsLoading(true)
    const todosRef = ref(db, 'todos');
    onValue(todosRef, (snapshot) => {
      const loadedTodos = snapshot.val() || [];

      setTodosCompleted(() => {
        return sortTodos(sortDoneTodos, Object.entries(loadedTodos)).filter(([id, { completed, todo }]) => {
          return completed && todo.toLowerCase().includes(searchValue.toLowerCase())
        })
      })
      setTodosNotCompleted(() => {
        return sortTodos(sortNotDoneTodos, Object.entries(loadedTodos)).filter(([id, { completed, todo }]) => {
          return !completed && todo.toLowerCase().includes(searchValue.toLowerCase())
        })
      })
      setIsLoading(false)
    });
  }

  return { loadTodos }
}