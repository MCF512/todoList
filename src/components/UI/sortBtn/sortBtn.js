import { useState } from "react"
import styles from './sortBtn.module.css'

export const SortBtn = ({ sortType, setSort, setIsLoading }) => {
  const [style, setStyle] = useState(styles.NO)

  const clickOnSort = (val) => {
    switch (val) {
      case 'noSort':
        setStyle(styles.AZ)
        return 'A-Z'
      case 'A-Z':
        setStyle(styles.ZA)
        return 'Z-A'
      case 'Z-A':
        setStyle(styles.NO)
        return 'noSort'
    }
  }

  return (
    <button
      className={style}
      onClick={() => {
        setIsLoading(true)
        setSort(clickOnSort(sortType))
      }}
    >
    </button>
  )
}