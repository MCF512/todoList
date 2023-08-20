import styles from "./search.module.css";
import { useDispatch } from "react-redux";
import { searchTodos } from "../../store/actions/searchTodos";
import { debounce } from "../../utils";


export const Search = () => {
  const dispatch = useDispatch()

  const searchTodo = (e) => dispatch(searchTodos(e.target.value))

  const debouncedSearchTodo = debounce(searchTodo, 500)

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Поиск..."
        type="text"
        onChange={debouncedSearchTodo}
      />
    </form>
  );
};
