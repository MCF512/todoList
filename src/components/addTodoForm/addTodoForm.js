import { useState } from "react";
import { handleAddTodo } from "../../utils/handleAddDodo";
import styles from "./addTodoForm.module.css";

export const AddTodoForm = ({
  refreshTodos,
  visible,
  setVisible,
  setIsLoading,
}) => {
  const [addTodoValue, setAddTodoValue] = useState("");
  const varStyle = {
    "--scrollTop": `${document.documentElement.scrollTop}px`,
  };

  return (
    <div
      className={visible ? styles.wrapper : styles.invisible}
      style={varStyle}
    >
      <form
        className={styles.form}
        onSubmit={(e) =>
          handleAddTodo(
            e,
            addTodoValue,
            setAddTodoValue,
            refreshTodos,
            setVisible,
            setIsLoading
          )
        }
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
          <button className={styles.add} type="submit"></button>
          <button
            className={styles.close}
            type="button"
            onClick={() => {
              document.body.style.overflow = "visible";
              setAddTodoValue("");
              setVisible(false);
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};
