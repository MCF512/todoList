import React, { useContext } from "react";
import { Context } from "../../utils/context";
import styles from "./search.module.css";


export const Search = () => {
  const { setSearchValue } = useContext(Context)

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        type="text"
        onChange={({ target }) => {
          setSearchValue(target.value)
        }
        }
      />
    </form>
  );
};
