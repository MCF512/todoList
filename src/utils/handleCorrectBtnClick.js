export const handleCorrectBtnClick = (id, setToChange, setId, setChangeFormVisible) => {
  fetch(`http://localhost:3005/todos/${id}`)
    .then(res => res.json())
    .then(json => {
      setToChange(json.todo)
      setId(id)
      setChangeFormVisible(true)
    })
}