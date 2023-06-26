import React, { useState } from "react";
import styles from './search.module.css';
import { handleSearch } from "../../utils/handleSearch";

export const Search = (setTodosCompleted, setTodosNotCompleted, refresh) => {
  const [value, setValue] = useState('');

  return (
    <form>
      <input className={styles.input} type="text" onChange={(e) => setValue(e.target.value)} />
      <button className={styles.btn} onClick={(e) => {
        e.preventDefault()
        handleSearch(value, setTodosCompleted, setTodosNotCompleted, refresh)
      }}>Поиск</button>
    </form>
  )
}