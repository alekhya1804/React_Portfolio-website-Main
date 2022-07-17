import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
import styles from './nav.module.css'
import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)
  
  return(
    <>
      
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#14FFEC"/>
      </div>
  {isOpen ? <ul className={styles.mobilelists}>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#aboutme"><li className={styles.list} onClick={() => setOpen(false)}>ABOUT</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#skills"><li className={styles.list}  onClick={() => setOpen(false)}>SKILLS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#projects"><li className={styles.list}  onClick={() => setOpen(false)}>PROJECTS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#contact"><li className={styles.list}  onClick={() => setOpen(false)}>CONTACT</li></Link>
      </ul> : null}
      
    </>
  )
}

export default MobileNav;