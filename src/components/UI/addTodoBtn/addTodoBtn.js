import React from "react";
import styles from './addTodoBtn.module.css'

export const AddTodoBtn = ({ showAddTodo }) => {
  return (
    <button
      className={styles.btn}
      onClick={() => {
        document.body.style.overflow = 'hidden'
        showAddTodo(true)
      }}
    >
      +
    </button>
  )
}