import styles from "./homepage.module.css"


const HomePage = () => {
  return(
    <>
      <div className={styles.homepage}>
        <h1 className={styles.myname}>Elnatan Samuel</h1>
        <p className={styles.paragraph}>Front-end web developer</p>
        <div className={styles.btn}>
          <button className={styles.btn1}>Resume</button>
          <button className={styles.btn2}>Contact</button>
        </div>
      </div>
    </>
  )
}

export default HomePage;