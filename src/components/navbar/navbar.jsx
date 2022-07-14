import NavLists from './navlists'
import MobileNav from './mobilenav'
import styles from './nav.module.css'


const NavBar = () => {
  return(
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          E S
        </div>
        
        <div className={styles.navLinks}>
          <NavLists />
        </div>
      </div>
    </>
  )
}

export default NavBar;