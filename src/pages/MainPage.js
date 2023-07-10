import { useEffect, useContext } from "react";
import {
  Search,
  AddTodoBtn,
  SortBtn,
  Spinner,
  AddTodoForm
} from '../components/components';
import { useGetTodos } from "../hooks/customHooks";
import { Context } from "../utils/context";
import styles from "./MainPage.module.css";
import { MainPageCard } from "../components/todoCard/MainPageCard/MainPageCard";

export const MainPage = () => {
  const {
    refresh,
    searchValue,
    isLoading,
    todosCompleted,
    todosNotCompleted,
    sortNotDoneTodos,
    sortDoneTodos
  } = useContext(Context)

  const { loadTodos } = useGetTodos(`http://localhost:3005/todos/`)

  useEffect(() => {
    loadTodos();
  }, [refresh, searchValue, sortNotDoneTodos, sortDoneTodos]);

  return (
    <div className={styles.App}>
      <AddTodoForm />
      <div className={styles.AppWrapper}>
        <div className={styles.top}>
          <Search />
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.botWrapper}>
            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Не выполнено</h2>
                <SortBtn
                  completedTodos={false}
                />
              </div>
              {todosNotCompleted.length ? (
                <>
                  {todosNotCompleted.map(({ todo, id, completed }) => {
                    return (
                      <MainPageCard
                        key={id}
                        todo={todo}
                        id={id}
                        completed={completed}
                      />
                    );
                  })}
                </>
              ) : (
                <p className={styles.empty}>Тут пока пусто...</p>
              )}
            </div>

            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Выполнено</h2>
                <SortBtn
                  completedTodos={true}
                />
              </div>
              {todosCompleted.length ? (
                <>
                  {todosCompleted.map(({ todo, id, completed }) => {
                    return (
                      <MainPageCard
                        key={id}
                        id={id}
                        todo={todo}
                        completed={completed}
                      />
                    );
                  })}
                </>
              ) : (
                <p className={styles.empty}>Тут пока пусто...</p>
              )}
            </div>
          </div>
        )}

        <div className={styles.btnWrapper}>
          <AddTodoBtn />
        </div>
      </div>
    </div>
  )
}