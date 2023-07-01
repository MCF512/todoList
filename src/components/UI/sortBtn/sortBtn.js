import { useState } from "react"
import stylesModule from './sortBtn.module.css'
// import { handleSort } from "../../../utils/handleSort"

export const SortBtn = ({ sortType, setSort, setIsLoading, todosDone, setTodos, refresh }) => {
  const [style, setStyle] = useState(stylesModule.NO)

  const clickOnSort = (val) => {
    switch (val) {
      case 'noSort':
        setStyle(stylesModule.AZ)
        return 'A-Z'
      case 'A-Z':
        setStyle(stylesModule.ZA)
        return 'Z-A'
      case 'Z-A':
        setStyle(stylesModule.NO)
        return 'noSort'
    }
  }

  return (
    <button
      className={style}
      onClick={(e) => {
        e.preventDefault()
        setSort(clickOnSort(sortType))
        // handleSort(sortType, todosDone, setTodos, refresh)
      }}
    >
    </button>
  )
}