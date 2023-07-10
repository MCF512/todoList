import { useContext } from "react";
import { Context } from "../../utils/context";
import { useChangeTodo } from "../../hooks/customHooks";
import styles from "./changeFrom.module.css"

export const ChangeForm = () => {
  const { isChangeFormVisible, setIsChangeFormVisible, valueToChange, setValueToChange } = useContext(Context);

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
        onSubmit={() => submitChangingTodo(valueToChange)}>
        <p className={styles.title}>Редактировать задачу</p>
        <input
          className={styles.textarea}
          onChange={({ target }) => setValueToChange(target.value)} type='text'
          value={valueToChange}
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