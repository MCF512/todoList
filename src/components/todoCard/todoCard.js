import styles from './todoCard.module.css';
import { Link } from 'react-router-dom';
import { showChangeForm, deleteTodo } from '../../store/actions';
import { useDispatch } from 'react-redux';

export const TodoCard = ({ todo, id, completed }) => {
  const dispatch = useDispatch()

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
            onClick={() => dispatch(showChangeForm())}
            className={styles.correct}>
          </button>

          <Link to='/'>
            <button
              onClick={() => dispatch(deleteTodo(id))}
              className={styles.delete}>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}