import styles from './todoCard.module.css';
import { useState } from 'react';
import { handleDelete } from '../../utils/handleDelete';

export const TodoCard = ({ todo, id, completed, refreshTodos, setToChange, setId, setChangeFormHidden }) => {
  const [checked, setChecked] = useState(completed)

  const handleClickCheckbox = (id) => {
    setChecked(!checked)

    async function getData() {
      let data = await fetch(`http://localhost:3005/todos/${id}`)
      let json = await data.json()
      return json
    }

    getData()
      .then(json => {
        json.completed = !json.completed

        fetch(`http://localhost:3005/todos/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(json)
        }).then(() => refreshTodos())
      })
  }

  const clickOnText = (e, id) => {
    setToChange(e.target.innerHTML)
    setId(id)
    setChangeFormHidden(false)
    console.log(id)
  }

  return (
    <div className={styles.card}>
      <form>
        <input
          className={styles.checkbox}
          onChange={() => handleClickCheckbox(id)}
          checked={checked}
          type='checkbox' />
      </form>
      <p
        onClick={(e) => clickOnText(e, id)}
        className={checked ? styles.completed : styles.notCompleted}>
        {todo}
      </p>

      <button
        onClick={() => handleDelete(id, refreshTodos)}
        className={styles.delete}>Delete</button>
    </div>
  )
}