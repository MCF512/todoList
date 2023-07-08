import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import { useAddTodo } from "../../hooks/customHooks";
import styles from "./addTodoForm.module.css";

export const AddTodoForm = () => {
  const [addTodoValue, setAddTodoValue] = useState("");
  const { isAddFormVisible, setIsAddFormVisible } = useContext(Context)
  const { addTodo } = useAddTodo(`http://localhost:3005/todos`);

  const varStyle = {
    "--scrollTop": `${document.documentElement.scrollTop}px`,
  };

  return (
    <div
      className={isAddFormVisible ? styles.wrapper : styles.invisible}
      style={varStyle}
    >
      <form
        className={styles.form}
        onSubmit={(e) => addTodo(e, addTodoValue)}
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
            onClick={() => {
              document.body.style.overflow = "visible";
              setAddTodoValue("");
              setIsAddFormVisible(false)
            }}
          />
        </div>
      </form>
    </div>
  );
};
