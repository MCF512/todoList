import { useEffect, useContext, useState } from "react";
import {
  Search,
  AddTodoBtn,
  Spinner,
  AddTodoForm,
  TodoList
} from '../components/components';
import { useGetTodos } from "../hooks/customHooks";
import { Context } from "../utils/index";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const {
    refresh,
    isLoading,
    items,
    searchValue,
    setSearchValue,
    isSearching,
    setIsSearching
  } = useContext(Context)

  const { loadTodos, searchTodos } = useGetTodos(`http://localhost:3005/todos/`)

  useEffect(() => {
    if (isSearching) {
      searchTodos(searchValue)
    } else {
      console.log('load')
      loadTodos();
    }
  }, [refresh, searchValue]);

  return (
    <div className={styles.App}>
      <AddTodoForm
        isAddFormVisible={isAddFormVisible}
        setIsAddFormVisible={setIsAddFormVisible}
      />
      <div className={styles.AppWrapper}>
        <div className={styles.top}>
          <Search
            setSearchValue={setSearchValue}
            setIsSearching={setIsSearching}
          />
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.listsWrapper}>
            <TodoList items={items} completedTodos={false} />
            <TodoList items={items} completedTodos={true} />
          </div>
        )}

        <div className={styles.btnWrapper}>
          <AddTodoBtn
            handleClick={() => setIsAddFormVisible(true)}
          />
        </div>
      </div>
    </div>
  )
}