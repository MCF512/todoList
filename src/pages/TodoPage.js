import { Navigate, useParams } from "react-router-dom";
import { Context } from "../utils/context";
import { useContext, useEffect, useState } from "react";
import { ChangeForm, Spinner, TodoCard } from "../components/components";
import { Page404 } from "./Page404";

export const TodoPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const { isLoading, setIsLoading } = useContext(Context);
  const [status, setStatus] = useState(200)

  useEffect(() => {
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
        setTodo(data)
      })
      .then(setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ?
        <Spinner />
        :
        (
          status == 200 ?
            (<div>
              <ChangeForm />
              <TodoCard
                todo={todo.todo}
                id={todo.id}
                completed={todo.completed}
              />
            </div>)
            :
            <Navigate to='/404' />

        )
      }
    </>
  )
}