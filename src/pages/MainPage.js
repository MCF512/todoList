import { useEffect } from "react";
import {
  Search,
  AddTodoBtn,
  AddTodoForm,
  TodoList
} from '../components/components';
import styles from "./MainPage.module.css";
import { getInitialTodos } from "../store/actions";
import { useDispatch } from "react-redux";

export const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitialTodos())
  }, []);

  return (
    <div className={styles.App}>
      <AddTodoForm />
      <div className={styles.AppWrapper}>
        <div className={styles.top}>
          <Search />
        </div>


        <div className={styles.listsWrapper}>
          <TodoList completedTodos={false} />
          <TodoList completedTodos={true} />
        </div>


        <div className={styles.btnWrapper}>
          <AddTodoBtn />
        </div>
      </div>
    </div>
  )
}