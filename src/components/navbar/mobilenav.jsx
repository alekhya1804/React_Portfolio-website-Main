import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
import styles from './nav.module.css'

const MobileNav = () => {
  return(
    <>
     
      <ul className={styles.mobilelists}>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#aboutme"><li className={styles.list}>ABOUT</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#skills"><li className={styles.list}>SKILLS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#projects"><li className={styles.list}>PROJECTS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#contact"><li className={styles.list}>CONTACT</li></Link>
      </ul>
      
    </>
  )
}

export default MobileNav;