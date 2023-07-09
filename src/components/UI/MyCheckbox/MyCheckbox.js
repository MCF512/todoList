import styles from './MyCheckbox.module.css';
import { useClickOnCheckbox } from '../../../hooks/useClickOnCheckbox';

export const MyCheckbox = ({ id, completed }) => {
  const { clickOnCheckbox } = useClickOnCheckbox()

  return (
    <form>
      <input
        className={styles.checkbox}
        onChange={() => clickOnCheckbox(id)}
        checked={completed}
        type='checkbox'
        name='checkbox'
      />
      <label
        className={styles.label}
        htmlFor='checkbox'
        onClick={() => clickOnCheckbox(id)}
      ></label>
    </form>
  )
}