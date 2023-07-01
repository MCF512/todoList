import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const handleCorrectBtnClick = (
  id,
  setToChange,
  setId,
  setChangeFormVisible
) => {

  const todoRef = ref(db, `todos/${id}`)
  onValue(todoRef, (snapshot) => {
    const loadedTodo = snapshot.val() || {};
    console.log(loadedTodo)
    setToChange(loadedTodo.todo)
    setId(id)
    document.body.style.overflow = "hidden";
    setChangeFormVisible(true);
  })

  // fetch(`http://localhost:3005/todos/${id}`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setToChange(json.todo);
  //     setId(id);
  //     document.body.style.overflow = "hidden";
  //     setChangeFormVisible(true);
  //   });
};
