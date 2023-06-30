import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TodoCard } from './components/todoCard/todoCard';
import { ChangeForm } from './components/changeForm/changeForm';
import { AddTodoForm } from './components/addTodoForm/addTodoForm';
import { Search } from './components/search/search';
import { AddTodoBtn } from './components/UI/addTodoBtn/addTodoBtn';
import { handleSort } from './utils/handleSort';
import { SortBtn } from './components/UI/sortBtn/sortBtn';
import { Spinner } from './components/UI/spinner/spinner';

function App() {
  const [todosCompleted, setTodosCompleted] = useState([])
  const [todosNotCompleted, setTodosNotCompleted] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [toChangeValue, setToChangeValue] = useState('')
  const [idToChange, setIdToChange] = useState(0)
  const [isFormChangingFormVisible, setIsFormChangingFormVisible] = useState(false)
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [sortDone, setSortDone] = useState('noSort')
  const [sortNotDone, setSortNotDone] = useState('noSort')
  const [isLoading, setIsLoading] = useState(true)

  const refreshTodos = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    handleSort(sortDone, setTodosCompleted, setTodosNotCompleted, true, setIsLoading)
    handleSort(sortNotDone, setTodosCompleted, setTodosNotCompleted, false, setIsLoading)
  }, [refresh, sortDone, sortNotDone])

  return (
    <div className={styles.App}>
      <AddTodoForm
        refreshTodos={refreshTodos}
        visible={showAddTodo}
        setVisible={setShowAddTodo}
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


        {isLoading ?
          <Spinner />
          :
          <div className={styles.botWrapper}>
            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Не выполнено</h2>
                <SortBtn
                  sortType={sortNotDone}
                  setSort={setSortNotDone}
                  setIsLoading={setIsLoading}
                />
              </div>
              {todosNotCompleted.map(({ todo, id, completed }) => {
                return <TodoCard
                  key={id}
                  id={id}
                  todo={todo}
                  completed={completed}
                  refreshTodos={refreshTodos}
                  setToChange={setToChangeValue}
                  setId={setIdToChange}
                  setChangeFormVisible={setIsFormChangingFormVisible} />
              })}
            </div>

            <div className={styles.todoWrapper}>
              <div className={styles.titleWrapper}>
                <h2>Выполнено</h2>
                <SortBtn
                  sortType={sortDone}
                  setSort={setSortDone}
                  setIsLoading={setIsLoading}
                />
              </div>
              {todosCompleted.map(({ todo, id, completed }) => {
                return <TodoCard
                  key={id}
                  id={id}
                  todo={todo}
                  completed={completed}
                  refreshTodos={refreshTodos}
                  setToChange={setToChangeValue}
                  setId={setIdToChange}
                  setChangeFormVisible={setIsFormChangingFormVisible} />
              })}
            </div>
          </div>
        }


        <div className={styles.btnWrapper}>
          <AddTodoBtn
            showAddTodo={setShowAddTodo}
          />
        </div>
      </div>
    </div >
  );
}

export default App;
