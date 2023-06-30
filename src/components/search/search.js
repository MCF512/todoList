import React, { useState } from "react";
import styles from './search.module.css';
import { handleSearch } from "../../utils/handleSearch";

export const Search = ({ setTodosCompleted, setTodosNotCompleted, setIsLoading }) => {

  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Поиск..." type="text" onChange={({ target }) => handleSearch(target.value, setTodosCompleted, setTodosNotCompleted, setIsLoading)} />
    </form>
  )
}