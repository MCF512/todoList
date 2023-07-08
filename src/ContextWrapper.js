import { useState } from "react";
import { Context } from "./utils/context";

export const ContextWrapper = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isChangeFormVisible, setIsChangeFormVisible] = useState(false);
  const [todosCompleted, setTodosCompleted] = useState([])
  const [todosNotCompleted, setTodosNotCompleted] = useState([]);
  const [idToChange, setIdToChange] = useState(null);
  const [valueToChange, setValueToChange] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [sortDoneTodos, setSortDoneTodos] = useState('noSort')
  const [sortNotDoneTodos, setSortNotDoneTodos] = useState('noSort')

  const refreshTodos = () => {
    setRefresh(!refresh);
  };

  return (
    <Context.Provider
      value={{
        refresh,
        refreshTodos,
        isLoading,
        setIsLoading,
        isAddFormVisible,
        setIsAddFormVisible,
        isChangeFormVisible,
        setIsChangeFormVisible,
        todosCompleted,
        setTodosCompleted,
        todosNotCompleted,
        setTodosNotCompleted,
        idToChange,
        setIdToChange,
        valueToChange,
        setValueToChange,
        searchValue,
        setSearchValue,
        sortDoneTodos,
        setSortDoneTodos,
        sortNotDoneTodos,
        setSortNotDoneTodos
      }}
    >
      {children}
    </Context.Provider>
  )
}