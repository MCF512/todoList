import { useContext } from "react";
import { Context } from "../../utils/context";
import styles from "./search.module.css";


export const Search = () => {
  const { setSearchValue, setIsSearching } = useContext(Context)


  const inputChange = ({ target }) => {
    if (!target.value) {
      setSearchValue('')
      setIsSearching(false)
      return
    } else {
      setIsSearching(true)
      setSearchValue(target.value)
    }
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        type="text"
        onChange={(e) => inputChange(e)}
      />
    </form>
  );
};
