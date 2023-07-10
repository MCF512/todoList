import gif from '../assets/meme.gif';
import styles from './Page404.module.css'


export const Page404 = () => {
  return (
    <div className={styles.page}>
      <p className={styles.text}>
        Ничего не найдено :(
        <br />
        не грустите, посмотрите смешную гифку
      </p>
      <img className={styles.gif} src={gif} />
    </div >
  )
}