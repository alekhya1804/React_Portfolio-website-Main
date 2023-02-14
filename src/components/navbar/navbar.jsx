import { useState } from 'react'
import NavLists from './navlists'
import MobileNav from './mobilenav'
import styles from './nav.module.css'
import { Sling as Hamburger } from 'hamburger-react'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const closeMenu = () => {
    setOpen(false);
  }
  return(
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          A R
        </div>
        
        <div className={styles.navLinks}>
          <NavLists />
          
        </div>
         <MobileNav /> 
        
      </div>
    </>
  )
}

export default NavBar;