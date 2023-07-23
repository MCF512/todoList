import { useState } from "react";
import { Context } from "./utils/context";

export const ContextWrapper = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([])

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
        isSearching,
        setIsSearching,
        isUpdating,
        setIsUpdating,
        searchValue,
        setSearchValue,
        items,
        setItems
      }}
    >
      {children}
    </Context.Provider>
  )
}