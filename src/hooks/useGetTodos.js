import { useState, useContext } from "react";
import { Context } from "../utils/context";


export const useGetTodos = (adress) => {
  const { setTodosCompleted, setTodosNotCompleted, setIsLoading, searchValue, sortDoneTodos, sortNotDoneTodos } = useContext(Context);

  function sortTodos(sortType, obj) {
    switch (sortType) {
      case 'noSort':
        break
      case 'A-Z':
        obj.sort((a, b) => {
          const todoA = a.todo.toUpperCase();
          const todoB = b.todo.toUpperCase();
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
          const todoA = a.todo.toUpperCase();
          const todoB = b.todo.toUpperCase();
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
    fetch(adress)
      .then(data => data.json())
      .then(json => {
        setTodosCompleted(() => {
          return sortTodos(sortDoneTodos, json).filter(item => {
            return item.completed && item.todo.toLowerCase().includes(searchValue.toLowerCase())
          })
        })

        setTodosNotCompleted(() => {
          return sortTodos(sortNotDoneTodos, json).filter(item => {
            return !item.completed && item.todo.toLowerCase().includes(searchValue.toLowerCase())
          })
        })
      })
      .then(() => setIsLoading(false))
  }

  return { loadTodos }
}