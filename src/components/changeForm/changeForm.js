import { useState } from "react";
import { useChangeTodo } from "../../hooks/customHooks";
import styles from "./changeFrom.module.css"

export const ChangeForm = ({ isChangeFormVisible, setIsChangeFormVisible, valueToChange, todoId }) => {
  const [value, setValue] = useState(valueToChange ? valueToChange : 'Не подгрузилась');
  const { submitChangingTodo } = useChangeTodo(`http://localhost:3005/todos`)

  const varStyle = {
    '--scrollTop': `${document.documentElement.scrollTop}px`
  }

  return (
    <div
      className={isChangeFormVisible ? styles.wrapper : styles.invisible}
      style={varStyle}
    >
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          submitChangingTodo(value, todoId)
          setIsChangeFormVisible(false)
        }}>
        <p className={styles.title}>Редактировать задачу</p>
        <input
          className={styles.textarea}
          onChange={({ target }) => setValue(target.value)} type='text'
          value={value}
        />
        <div className={styles.botWrapper}>
          <button className={styles.add} type="submit"></button>
          <button className={styles.close} type="button"
            onClick={() => {
              document.body.style.overflow = 'visible'
              setIsChangeFormVisible(false)
            }}></button>

        </div>
      </form>
    </div>
  )
}