import styles from './todoCard.module.css';
import { useState } from 'react';
import { handleDelete } from '../../utils/handleDelete';
import { handleDone } from '../../utils/handleDone';
import { handleCorrectBtnClick } from '../../utils/handleCorrectBtnClick';
import { MyCheckbox } from '../UI/MyCheckbox/MyCheckbox';

export const TodoCard = ({ todo, id, completed, refreshTodos, setToChange, setId, setChangeFormVisible, setIsLoadig }) => {
  const [showBtns, setShowBtns] = useState(false)

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >

      <MyCheckbox
        id={id}
        refreshTodos={refreshTodos}
        completed={completed}
        setIsLoadig={setIsLoadig}
      />

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