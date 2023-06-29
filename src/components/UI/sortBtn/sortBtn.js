import { useState } from "react"
import styles from './sortBtn.module.css'

export const SortBtn = ({ sortType, setSort }) => {
  const [style, setStyle] = useState(styles.NO)

  const clickOnSort = (val) => {
    if (val == 'noSort') {
      setStyle(styles.AZ)
      return 'A-Z'
    }
    if (val == 'A-Z') {
      setStyle(styles.ZA)
      return 'Z-A'
    }
    if (val == 'Z-A') {
      setStyle(style.NO)
      return 'noSort'
    }
  }

  return (
    <button
      className={style}
      onClick={() => {
        setSort(clickOnSort(sortType))
      }}
    >
      {sortType}
    </button>
  )
}