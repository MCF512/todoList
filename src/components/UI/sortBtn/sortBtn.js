import { useState } from "react";
import styles from './sortBtn.module.css'

export const SortBtn = ({ styleBtn, setStyleBtn }) => {

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
        break;
      case 'A-Z':
        setStyleBtn('Z-A')
        break;
      case 'Z-A':
        setStyleBtn('noSort')
        break;
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