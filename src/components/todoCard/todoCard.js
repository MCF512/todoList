import styles from './todoCard.module.css';
import { useState } from 'react';
import { handleDelete } from '../../utils/handleDelete';
import { handleDone } from '../../utils/handleDone';
import { handleCorrectBtnClick } from '../../utils/handleCorrectBtnClick';

export const TodoCard = ({ todo, id, completed, refreshTodos, setToChange, setId, setChangeFormVisible }) => {
  const [showBtns, setShowBtns] = useState(false)

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >
      <form>
        <input
          className={styles.checkbox}
          onChange={() => handleDone(id, refreshTodos)}
          checked={completed}
          type='checkbox' />
      </form>
      <p
        className={completed ? styles.completed : styles.notCompleted}>
        {todo}
      </p>


      <div className={styles.btns}>
        <button
          onClick={() => handleCorrectBtnClick(id, setToChange, setId, setChangeFormVisible)}
          className={showBtns ? styles.correct : styles.correctHidden}>
        </button>

        <button
          onClick={() => handleDelete(id, refreshTodos)}
          className={showBtns ? styles.delete : styles.deleteHidden}></button>
      </div>
    </div>
  )
}