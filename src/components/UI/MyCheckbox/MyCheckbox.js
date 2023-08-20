import styles from './MyCheckbox.module.css';
import { setCurrentTodoState } from '../../../store/actions/index';
import { useDispatch } from 'react-redux';

export const MyCheckbox = ({ id, completed }) => {
  const dispatch = useDispatch()

  return (
    <>
      <input
        className={styles.checkbox}
        onChange={() => dispatch(setCurrentTodoState(id))}
        checked={completed}
        type='checkbox'
        name='checkbox'
      />
      <label
        className={styles.label}
        htmlFor='checkbox'
        onClick={() => dispatch(setCurrentTodoState(id))}
      ></label>
    </>
  )
}