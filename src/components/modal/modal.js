import styles from './modal.module.css'
import { useState } from 'react'

export const Modal = (show, value) => {
  const [showModal, setShowModal] = useState(show);
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = () => {

  }

  return (
    <div className={showModal ? styles.modal : styles.modalHidden}>
      <form>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type='text'
          value={inputValue} />
        <button onClick={handleSubmit}>Подтвердить</button>
        <button onClick={() => setShowModal(false)}>Закрыть</button>
      </form>
    </div>
  )
}