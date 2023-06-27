import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TodoCard } from './components/todoCard/todoCard';
import { ChangeForm } from './components/changeForm/changeForm';
import { AddTodoForm } from './components/addTodoForm/addTodoForm';
import { Search } from './components/search/search';
import { handleLoading } from './utils/handleLoading';

function App() {
  const [todosCompleted, setTodosCompleted] = useState([])
  const [todosNotCompleted, setTodosNotCompleted] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [toChangeValue, setToChangeValue] = useState('')
  const [idToChange, setIdToChange] = useState(0)
  const [isFormChangingFormHidden, setIsFormChangingFormHidden] = useState(true)
  const [needToSort, setNeedToSort] = useState(false)

  const refreshTodos = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    handleLoading(needToSort, setTodosCompleted, setTodosNotCompleted)
  }, [refresh, needToSort])

  const clickOnSort = () => {
    needToSort ? setNeedToSort(false) : setNeedToSort(true);
    refreshTodos()
  }


  return (
    <div className={styles.App}>
      <div className={styles.top}>
        <button onClick={clickOnSort}>Сортировать</button>
        <AddTodoForm
          refreshTodos={refreshTodos}
        />

        <Search
          setTodosCompleted={setTodosCompleted}
          setTodosNotCompleted={setTodosNotCompleted}
          refresh={refreshTodos}
        />

        <ChangeForm
          idToChange={idToChange}
          toChangeValue={toChangeValue}
          refreshTodos={refreshTodos}
          setToChangeValue={setToChangeValue}
          hidden={isFormChangingFormHidden}
          setHidden={setIsFormChangingFormHidden}
        />
      </div>

      <div className={styles.botWrapper}>
        <div className={styles.todoWrapper}>
          <h2>Не выполнено</h2>
          {todosNotCompleted.map(({ todo, id, completed }) => {
            return <TodoCard
              key={id}
              id={id}
              todo={todo}
              completed={completed}
              refreshTodos={refreshTodos}
              setToChange={setToChangeValue}
              setId={setIdToChange}
              setChangeFormHidden={setIsFormChangingFormHidden} />
          })}
        </div>

        <div className={styles.todoWrapper}>
          <h2>Выполнено</h2>
          {todosCompleted.map(({ todo, id, completed }) => {
            return <TodoCard
              key={id}
              id={id}
              todo={todo}
              completed={completed}
              refreshTodos={refreshTodos}
              setToChange={setToChangeValue}
              setId={setIdToChange}
              setChangeFormHidden={setIsFormChangingFormHidden} />
          })}
        </div>
      </div>
    </div >
  );
}

export default App;
