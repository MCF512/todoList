import { useEffect, useContext } from "react";
import {
  TodoCard,
  ChangeForm,
  AddTodoForm,
  Search,
  AddTodoBtn,
  SortBtn,
  Spinner
} from './components/components'
import { useGetTodos } from "./hooks/customHooks";
import { Context } from "./utils/context";
import styles from "./App.module.css";

export const App = () => {
  const {
    refresh,
    searchValue,
    isLoading,
    todosCompleted,
    todosNotCompleted,
    sortNotDoneTodos,
    sortDoneTodos
  } = useContext(Context)

  const { loadTodos } = useGetTodos()

  useEffect(() => {
    loadTodos();
  }, [refresh, searchValue, sortNotDoneTodos, sortDoneTodos]);

  return (
    <div className={styles.App}>
      <AddTodoForm />
      <ChangeForm />

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
                  {todosNotCompleted.map(([id, { todo, completed }]) => {
                    return (
                      <TodoCard
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
                  {todosCompleted.map(([id, { todo, completed }]) => {
                    return (
                      <TodoCard
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
  );
}