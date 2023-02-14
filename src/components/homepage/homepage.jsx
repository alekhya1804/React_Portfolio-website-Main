import styles from "./homepage.module.css"
import { HashLink as Link } from 'react-router-hash-link'
import ResumePDF from '../../files/Alekhya_Reddy.pdf';

const HomePage = () => {
  return(
    <>
      <div className={styles.homepage}>
        <h1 className={styles.myname}>Alekhya Reddy</h1>
        <p className={styles.paragraph}>Front-end web developer</p>
        <div className={styles.btn}>
          <a target="_blank" href={ResumePDF} download="Alekhya_Reddy.pdf"><button className={styles.btn1}>Resume</button></a>
          <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#contact"><button className={styles.btn2}>Contact</button></Link>
        </div>
      </div>
    </>
  )
}

export default HomePage;