import styles from './MyCheckbox.module.css';
import { handleDone } from '../../../utils/handleDone';

export const MyCheckbox = ({ id, refreshTodos, completed, setIsLoadig }) => {

  return (
    <>
      <input
        className={styles.checkbox}
        onChange={() => handleDone(id, refreshTodos, setIsLoadig)}
        checked={completed}
        type='checkbox'
        name='checkbox'
      />
      <label
        className={styles.label}
        htmlFor='checkbox'
        onClick={() => handleDone(id, refreshTodos, setIsLoadig)}
      ></label>
    </>
  )
}