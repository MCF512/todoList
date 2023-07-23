import { useContext } from "react";
import { Context } from "../../../utils/context";
import styles from './addTodoBtn.module.css';

export const AddTodoBtn = ({ handleClick }) => {
  const { isLoading } = useContext(Context)

  return (
    <button
      className={isLoading ? styles.none : styles.btn}
      onClick={() => {
        document.body.style.overflow = 'hidden';
        handleClick()
      }}
    >
      +
    </button>
  )
}