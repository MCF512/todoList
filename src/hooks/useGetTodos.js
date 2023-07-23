import { useContext } from "react";
import { Context } from "../utils/context";


export const useGetTodos = (adress) => {
  const { setIsLoading, setIsSearching, setItems, searchValue } = useContext(Context);

  function sortTodos(sortType, arr) {
    switch (sortType) {
      case 'noSort':
        break
      case 'A-Z':
        arr.sort((a, b) => {
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
        arr.sort((a, b) => {
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
    return arr
  }

  function loadTodos() {
    setIsLoading(true)
    fetch(adress)
      .then(data => data.json())
      .then(json => {
        setItems(json)
      })
      .then(() => setIsLoading(false))
  }

  function searchTodos() {
    if (!searchValue) {
      setIsSearching(false)
      return
    } else {
      setIsSearching(true)
      setIsLoading(true)
      fetch(adress)
        .then(data => data.json())
        .then(json => {
          setItems(json.filter(item => {
            return item.todo.toLowerCase().includes(searchValue.toLowerCase())
          }))
        })
        .then(() => setIsLoading(false))
    }
  }

  return { loadTodos, sortTodos, searchTodos }
}