import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

const NavLists = () => {
  return(
    <>
     
      <ul>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#aboutme"><li>ABOUT</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#projects"><li>PROJECTS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#skills"><li>SKILLS</li></Link>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#contact"><li>CONTACT</li></Link>
      </ul>
      
    </>
  )
}

export default NavLists;