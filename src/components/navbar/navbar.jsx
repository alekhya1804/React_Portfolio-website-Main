import { useState } from 'react'
import NavLists from './navlists'
import MobileNav from './mobilenav'
import styles from './nav.module.css'
import { Sling as Hamburger } from 'hamburger-react'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  return(
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          E S
        </div>
        
        <div className={styles.navLinks}>
          <NavLists />
          
        </div>
          {isOpen ? <MobileNav /> : null}
        <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#14FFEC"/>
        </div>
      </div>
    </>
  )
}

export default NavBar;