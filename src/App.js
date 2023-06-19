import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { TodoCard } from './components/todoCard/todoCard';
import { ChangeForm } from './components/changeForm/changeForm';
import { AddTodoForm } from './components/addTodoForm/addTodoForm';
import { handleSort } from './utils/handleSort';

function App() {
  const [todosCompleted, setTodosCompleted] = useState([])
  const [todosNotCompleted, setTodosNotCompleted] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [toChangeValue, setToChangeValue] = useState('')
  const [idToChange, setIdToChange] = useState(0)
  const [isFormChangingFormHidden, setIsFormChangingFormHidden] = useState(true)

  const refreshTodos = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    fetch('http://localhost:3005/todos')
      .then(response => response.json())
      .then(json => {
        setTodosCompleted(json.filter(item => {
          return item.completed
        }))
        setTodosNotCompleted(json.filter(item => {
          return !item.completed
        }))
      })
  }, [refresh])


  return (
    <div className={styles.App}>
      <AddTodoForm
        refreshTodos={refreshTodos}
      />

      <ChangeForm
        idToChange={idToChange}
        toChangeValue={toChangeValue}
        refreshTodos={refreshTodos}
        setToChangeValue={setToChangeValue}
        hidden={isFormChangingFormHidden}
        setHidden={setIsFormChangingFormHidden}
      />

      <h2>Не выполнено</h2>
      <button onClick={(e) => handleSort(e, refreshTodos)}>Сортировать</button>
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
    </div >
  );
}

export default App;
