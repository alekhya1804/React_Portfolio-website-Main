import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

const NavLists = () => {
  return(
    <>
     
      <ul>
        <Link smooth style={{ color: 'inherit', textDecoration: 'inherit'}} to="#aboutme"><li>ABOUT</li></Link>
        <li>PROJECTS</li>
        <li>SKILLS</li>
        <li>CONTACT</li>
      </ul>
      
    </>
  )
}

export default NavLists;