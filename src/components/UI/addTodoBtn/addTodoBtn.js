import styles from './addTodoBtn.module.css';
import { useDispatch } from "react-redux";
import { showAddForm } from "../../../store/actions/index";

export const AddTodoBtn = () => {
  const dispatch = useDispatch()

  return (
    <button
      // className={isLoading ? styles.none : styles.btn}
      className={styles.btn}
      onClick={() => {
        dispatch(showAddForm())
      }}
    >
      +
    </button>
  )
}