import { handleSubmit } from "../../utils/handleSubmit"
import styles from "./changeFrom.module.css"

export const ChangeForm = ({ idToChange, toChangeValue, refreshTodos, setToChangeValue, visible, setVisible }) => {

  const varStyle = {
    '--scrollTop': `${document.documentElement.scrollTop}px`
  }

  return (
    <div
      className={visible ? styles.wrapper : styles.invisible}
      style={varStyle}
    >
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, idToChange, toChangeValue, refreshTodos, setVisible)}>
        <p className={styles.title}>Редактировать задачу</p>
        <input
          className={styles.textarea}
          onChange={({ target }) => setToChangeValue(target.value)} type='text'
          value={toChangeValue} />
        <div className={styles.botWrapper}>
          <button className={styles.add} type="submit"></button>
          <button className={styles.close} type="button" onClick={() => {
            document.body.style.overflow = 'visible'
            setVisible(false)
          }}></button>

        </div>
      </form>
    </div>
  )
}