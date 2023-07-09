import { useState } from 'react';
import { MyCheckbox } from '../components';
import { useDelete, useChangeTodo } from '../../hooks/customHooks';
import styles from './todoCard.module.css';

export const TodoCard = ({ todo, id, completed }) => {
  const [showBtns, setShowBtns] = useState(false)
  const { del } = useDelete();
  const { setChangingTodo } = useChangeTodo()

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowBtns(true)}
      onMouseLeave={() => setShowBtns(false)}
    >

      <MyCheckbox
        id={id}
        completed={completed}
      />

      <p
        className={completed ? styles.completed : styles.notCompleted}>
        {todo}
      </p>


      <div className={styles.btns}>
        <button
          onClick={() => {
            setChangingTodo(id)
          }}
          className={showBtns ? styles.correct : styles.correctHidden}>
        </button>

        <button
          onClick={() => {
            del(id)
          }}
          className={showBtns ? styles.delete : styles.deleteHidden}></button>
      </div>
    </div>
  )
}