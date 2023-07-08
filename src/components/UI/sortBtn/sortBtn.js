import { useContext } from "react";
import { Context } from "../../../utils/context";
import styles from './sortBtn.module.css'

export const SortBtn = ({ completedTodos }) => {
  const { sortDoneTodos, setSortDoneTodos, sortNotDoneTodos, setSortNotDoneTodos } = useContext(Context);

  const setStyles = () => {
    const styleToChange = completedTodos ? sortDoneTodos : sortNotDoneTodos;

    switch (styleToChange) {
      case 'noSort':
        return styles.AZ;
      case 'A-Z':
        return styles.ZA;
      case 'Z-A':
        return styles.NO
    }
  }

  const clickOnSort = (val) => {
    switch (val) {
      case 'noSort':
        return 'A-Z'
      case 'A-Z':
        return 'Z-A'
      case 'Z-A':
        return 'noSort'
    }
  }

  return (
    <button
      className={setStyles()}
      onClick={() => {
        completedTodos ?
          setSortDoneTodos(clickOnSort(sortDoneTodos))
          :
          setSortNotDoneTodos(clickOnSort(sortNotDoneTodos))
      }}
    >
    </button>
  )
}