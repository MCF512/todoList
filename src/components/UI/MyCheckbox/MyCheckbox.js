import styles from './MyCheckbox.module.css';
import { useClickOnCheckbox } from '../../../hooks/useClickOnCheckbox';

export const MyCheckbox = ({ id, completed }) => {
  const { clickOnCheckbox } = useClickOnCheckbox(`http://localhost:3005/todos/${id}`)

  return (
    <>
      <input
        className={styles.checkbox}
        onChange={() => clickOnCheckbox()}
        checked={completed}
        type='checkbox'
        name='checkbox'
      />
      <label
        className={styles.label}
        htmlFor='checkbox'
        onClick={() => clickOnCheckbox()}
      ></label>
    </>
  )
}