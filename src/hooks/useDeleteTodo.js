import { useContext } from "react"
import { Context } from "../utils/context"
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDelete = () => {
  const { setIsLoading, setIsChangeFormVisible } = useContext(Context)

  function del(id) {
    setIsLoading(true)
    const todoRef = ref(db, `todos/${id}`);
    remove(todoRef)
    setIsChangeFormVisible(false)
  }

  return { del }
}