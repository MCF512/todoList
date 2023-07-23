import { Navigate, useParams } from "react-router-dom";
import { Context } from "../utils/context";
import { useContext, useEffect, useState } from "react";
import { ChangeForm, Spinner, TodoCard } from "../components/components";
import { useGetTodos } from "../hooks/useGetTodos";

export const TodoPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const { isLoading, setIsLoading, isUpdating } = useContext(Context);
  const [status, setStatus] = useState(200);
  const [isChangeFormVisible, setIsChangeFormVisible] = useState(false);

  useEffect(() => {
    if (!isUpdating) {
      setIsLoading(true)
      fetch(`http://localhost:3005/todos/${params.id}`)
        .then(res => {
          if (res.status == 200) {
            return res.json()
          } else {
            setStatus(res.status)
          }
        })
        .then(data => {
          setTodo({ ...data })
        })
        .then(() => setIsLoading(false))
    }
  }, [isUpdating == false])

  return (
    <>
      {status == 200 ?
        isLoading ?
          <Spinner />
          :
          (
            (<div>
              <ChangeForm
                isChangeFormVisible={isChangeFormVisible}
                setIsChangeFormVisible={setIsChangeFormVisible}
                valueToChange={todo.todo}
                todoId={params.id}
              />
              <TodoCard
                todo={todo.todo}
                id={todo.id}
                completed={todo.completed}
                setIsChangeFormVisible={setIsChangeFormVisible}
              />
            </div>)
          )
        :
        <><Navigate to='/404' /></>
      }
    </>
  )
}