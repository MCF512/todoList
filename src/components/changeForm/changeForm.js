import { handleSubmit } from "../../utils/handleSubmit"
import styles from "./changeFrom.module.css"

export const ChangeForm = ({ idToChange, toChangeValue, refreshTodos, setToChangeValue, hidden, setHidden }) => {

  const closeForm = () => {
    setHidden(true)
  }

  return (
    <form
      className={hidden ? styles.formHidden : styles.form}
      onSubmit={(e) => handleSubmit(e, idToChange, toChangeValue, refreshTodos, setHidden)}>
      <input
        onChange={({ target }) => setToChangeValue(target.value)} type='text'
        value={toChangeValue} />
      <button type='submit'>Подтвердить</button>
      <button onClick={closeForm}>Закрыть</button>
    </form>
  )
}