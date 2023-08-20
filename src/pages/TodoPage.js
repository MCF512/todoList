import { Navigate, useParams } from "react-router-dom";
import { ChangeForm, TodoCard } from "../components/components";
import { useSelector } from "react-redux";

export const TodoPage = () => {
  const params = useParams();
  const todo = useSelector((state) => state.todos.filter((todo) => {
    return todo.id == params.id
  }))[0];

  return (
    <>
      {todo ? <div>
        <ChangeForm
          valueToChange={todo.todo}
          todoId={params.id}
        />
        <TodoCard
          todo={todo.todo}
          id={todo.id}
          completed={todo.completed}
        />
      </div>
        : <><Navigate to='/404' /></>}
    </>
  )
}