import { useState } from "react";
import styles from "./changeFrom.module.css"
import { changeTodo, hideChangeForm } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const ChangeForm = ({ valueToChange, todoId }) => {
  const [value, setValue] = useState(valueToChange ? valueToChange : 'Не подгрузилась');
  const dispatch = useDispatch()

  const isChangeFormVisible = useSelector((state) => state.forms.isChangeFormVisible)
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
          dispatch(changeTodo(todoId, value))
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
              dispatch(hideChangeForm())
            }}></button>

        </div>
      </form>
    </div>
  )
}