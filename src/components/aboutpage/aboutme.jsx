import styles from './aboutme.module.css'
import { BrowserRouter } from 'react-router-dom'
import SvgLogo from '../../assets/undraw_web_developer_re_h7ie.svg'
import SvgLogo2 from '../../assets/html icon/undraw_programming_re_kg9v.svg'

const AboutMe = () => {
  return(
    <>
      <section className={styles.aboutme} id="aboutme">
        <h1 className={styles.titlehead}>About Me</h1>
        <div className={styles.aboutcontent}>
        <div className={styles.content}> 
          <p className={styles.paragraph}>I am Alekhya Reddy. I am from Hyderabad, completed my post-graduation in MCA computer science, and completed a course and became certified in web development in alphabeZ. I have created and worked on a few web projects, and this is one of them. </p>
        </div>
        <div className={styles.imgcontainer}>
        <img className={styles.img} src={SvgLogo2} />
           </div>
          </div>
      </section>
    </>
  )
}

export default AboutMe;