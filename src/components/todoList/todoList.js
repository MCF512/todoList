import { useState } from "react";
import { MainPageCard, SortBtn } from "../components";
import styles from './todoList.module.css'
import { useSelector } from "react-redux";
import { sortTodos } from "../../utils";

export const TodoList = ({ completedTodos }) => {
  const [styleBtn, setStyleBtn] = useState('noSort');

  const todos = sortTodos(useSelector((state) => state.todos.filter(item => {
    return item.completed == completedTodos
  })), styleBtn)

  return (
    <div className={styles.botWrapper}>
      <div className={styles.todoWrapper}>
        <div className={styles.titleWrapper}>
          <h2>
            {completedTodos ? 'Выполнено' : 'Не выполнено'}
          </h2>
          <SortBtn
            styleBtn={styleBtn}
            setStyleBtn={setStyleBtn}
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