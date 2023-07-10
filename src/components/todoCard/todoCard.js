import { useDelete, useChangeTodo } from '../../hooks/customHooks';
import styles from './todoCard.module.css';
import { Link } from 'react-router-dom';

export const TodoCard = ({ todo, id, completed }) => {
  const { del } = useDelete(`http://localhost:3005/todos/${id}`);
  const { setChangingTodo } = useChangeTodo(`http://localhost:3005/todos`)

  return (
    <div
      className={styles.card}
    >

      <p
        className={styles.notCompleted}>
        {todo ? todo : 'Задача не найдена'}
      </p>


      <div className={styles.btns}>
        <p
          className={completed ?
            styles.titleCompleted
            :
            styles.titleNotCompleted
          }
        >
          {completed ?
            'Выполнено'
            :
            'Не выполнено'
          }
        </p>
        <div className={styles.btnsWrapper}>
          <Link
            className={styles.back}
            to='/' />

          <button
            onClick={() => {
              setChangingTodo(id)
            }}
            className={styles.correct}>
          </button>

          <Link to='/'>
            <button
              onClick={() => {
                del(id)
              }}
              className={styles.delete}>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}