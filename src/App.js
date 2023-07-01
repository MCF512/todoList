import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { TodoCard } from "./components/todoCard/todoCard";
import { ChangeForm } from "./components/changeForm/changeForm";
import { AddTodoForm } from "./components/addTodoForm/addTodoForm";
import { Search } from "./components/search/search";
import { AddTodoBtn } from "./components/UI/addTodoBtn/addTodoBtn";
import { handleSort } from "./utils/handleSort";
import { SortBtn } from "./components/UI/sortBtn/sortBtn";
import { Spinner } from "./components/UI/spinner/spinner";
import { handleLoading } from "./utils/handleLoading";

function App() {
  const [todosCompleted, setTodosCompleted] = useState([]);
  const [todosNotCompleted, setTodosNotCompleted] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [toChangeValue, setToChangeValue] = useState("");
  const [idToChange, setIdToChange] = useState(0);
  const [isFormChangingFormVisible, setIsFormChangingFormVisible] =
    useState(false);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [sortDone, setSortDone] = useState("noSort");
  const [sortNotDone, setSortNotDone] = useState("noSort");
  const [isLoading, setIsLoading] = useState(true);

  const refreshTodos = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    handleLoading(setTodosCompleted, setTodosNotCompleted, setIsLoading, sortDone, sortNotDone);
  }, [refresh, sortDone, sortNotDone]);

  return (
    <div className={styles.App}>
      <AddTodoForm
        refreshTodos={refreshTodos}
        visible={showAddTodo}
        setVisible={setShowAddTodo}
        setIsLoading={setIsLoading}
      />

      <ChangeForm
        idToChange={idToChange}
        toChangeValue={toChangeValue}
        refreshTodos={refreshTodos}
        setToChangeValue={setToChangeValue}
        visible={isFormChangingFormVisible}
        setVisible={setIsFormChangingFormVisible}
      />

      <div className={styles.AppWrapper}>
        <div className={styles.top}>
          <Search
            setTodosCompleted={setTodosCompleted}
            setTodosNotCompleted={setTodosNotCompleted}
            setIsLoading={setIsLoading}
          />
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.botWrapper}>
            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Не выполнено</h2>
                <SortBtn
                  sortType={sortNotDone}
                  setSort={setSortNotDone}
                  setIsLoading={setIsLoading}
                  todosDone={false}
                  setTodos={setTodosNotCompleted}
                  refresh={refreshTodos}
                />
              </div>
              {todosNotCompleted.length ? (
                <>
                  {todosNotCompleted.map(([id, { todo, completed }]) => {
                    return (
                      <TodoCard
                        key={id}
                        id={id}
                        todo={todo}
                        completed={completed}
                        refreshTodos={refreshTodos}
                        setToChange={setToChangeValue}
                        setId={setIdToChange}
                        setChangeFormVisible={setIsFormChangingFormVisible}
                        setIsLoadig={setIsLoading}
                      />
                    );
                  })}{" "}
                </>
              ) : (
                <p className={styles.empty}>Тут пока пусто...</p>
              )}
            </div>

            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Выполнено</h2>
                <SortBtn
                  sortType={sortDone}
                  setSort={setSortDone}
                  setIsLoading={setIsLoading}
                  todosDone={true}
                  setTodos={setTodosCompleted}
                  refresh={refreshTodos}
                />
              </div>
              {todosCompleted.length ? (
                <>
                  {todosCompleted.map(([id, { completed, todo }]) => {
                    return (
                      <TodoCard
                        key={id}
                        id={id}
                        todo={todo}
                        completed={completed}
                        refreshTodos={refreshTodos}
                        setToChange={setToChangeValue}
                        setId={setIdToChange}
                        setChangeFormVisible={setIsFormChangingFormVisible}
                        setIsLoadig={setIsLoading}
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
          <AddTodoBtn showAddTodo={setShowAddTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
