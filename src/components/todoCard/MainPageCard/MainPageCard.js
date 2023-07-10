import { MyCheckbox } from '../../components';
import styles from './MainPageCard.module.css';
import { Link } from 'react-router-dom';

export const MainPageCard = ({ todo, id, completed }) => {

  return (
    <div
      className={styles.card}
    >

      <MyCheckbox
        id={id}
        completed={completed}
        disabled
      />

      <Link to={`/task/${id}`}
        className={completed ? styles.completed : styles.notCompleted}>
        {todo.length >= 30 ?
          todo.substring(0, 30) + '...'
          :
          todo
        }
      </Link>
    </div>
  )
}