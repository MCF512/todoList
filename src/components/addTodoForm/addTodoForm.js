import { useState } from "react";
import styles from "./addTodoForm.module.css";
import { addTodo, hideAddForm } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const AddTodoForm = () => {
  const [addTodoValue, setAddTodoValue] = useState("");
  const dispatch = useDispatch()

  const varStyle = {
    "--scrollTop": `${document.documentElement.scrollTop}px`,
  };

  const isAddFormVisible = useSelector((state) => state.forms.isAddFormVisible)

  return (
    <div
      className={isAddFormVisible ? styles.wrapper : styles.invisible}
      style={varStyle}
    >
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addTodo(addTodoValue, setAddTodoValue))
        }}
      >
        <p className={styles.title}>Добавить задачу</p>
        <input
          className={styles.textarea}
          onChange={(e) => setAddTodoValue(e.target.value)}
          value={addTodoValue}
          type="text"
          placeholder="Описание задачи..."
        />
        <div className={styles.botWrapper}>
          <button
            className={styles.add}
            type="submit"
          />
          <button
            className={styles.close}
            type="button"
            onClick={() => dispatch(hideAddForm(setAddTodoValue))}
          />
        </div>
      </form>
    </div>
  );
};
