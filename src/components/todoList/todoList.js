import { useState } from "react";
import { MainPageCard, SortBtn } from "../components";
import styles from './todoList.module.css'
export const TodoList = ({ items, completedTodos }) => {

  const [todos, setTodos] = useState(items.filter(item => {
    return item.completed == completedTodos
  }))

  return (
    <div className={styles.botWrapper}>
      <div className={styles.todoWrapper}>
        <div className={styles.titleWrapper}>
          <h2>
            {completedTodos ? 'Выполнено' : 'Не выполнено'}
          </h2>
          <SortBtn
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        {todos.length ? (
          <>
            {todos.map(({ todo, id, completed }) => {
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
    </div>
  )
}