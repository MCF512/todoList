import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [todosCompleted, setTodosCompleted] = useState([])
  const [todosNotCompleted, setTodosNotCompleted] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setTodosCompleted(json.filter(item => {
          return item.completed
        }))
        setTodosNotCompleted(json.filter(item => {
          return !item.completed
        }))
      })
  }, [])

  return (
    <div className={styles.App}>
      <h2 className={styles.mainTitle}>Todo list</h2>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Не выполнено</h3>
          <div className={styles.todos}>
            {todosCompleted.map(({ title }) => {
              return (
                <div className={styles.notCompletedTodo}>
                  <p className={styles.titleNotCompleted}>{title}</p>
                  <p className={styles.completed}>Не выполнено</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.wrapper}>
          <h3 className={styles.title}>Выполнено</h3>
          <div className={styles.todos}>
            {todosCompleted.map(({ title }) => {
              return (
                <div className={styles.completedTodo}>
                  <p className={styles.titleCompleted}>{title}</p>
                  <p className={styles.completed}>Выполнено</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;
