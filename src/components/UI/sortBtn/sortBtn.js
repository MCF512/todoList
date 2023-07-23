import { useState } from "react";
import styles from './sortBtn.module.css'
import { useGetTodos } from "../../../hooks/useGetTodos";

export const SortBtn = ({ todos, setTodos }) => {

  const [styleBtn, setStyleBtn] = useState('noSort');
  const { sortTodos } = useGetTodos()

  const setStyles = () => {
    switch (styleBtn) {
      case 'noSort':
        return styles.NO;
      case 'A-Z':
        return styles.AZ;
      case 'Z-A':
        return styles.ZA
    }
  }

  const clickOnSort = (val) => {
    switch (val) {
      case 'noSort':
        setStyleBtn('A-Z')
        setTodos([...sortTodos('A-Z', todos)])
        return 'A-Z'
      case 'A-Z':
        setStyleBtn('Z-A')
        setTodos([...sortTodos('Z-A', todos)])
        return 'Z-A'
      case 'Z-A':
        setStyleBtn('noSort')
        setTodos([...sortTodos('noSort', todos)])
        return 'noSort'
    }
  }

  return (
    <button
      className={setStyles()}
      onClick={() => {
        clickOnSort(styleBtn)
      }}
    >
    </button>
  )
}