import NavBar from '../components/navbar/navbar'
import styles from './page.module.css'
import HomePage from '../components/homepage/homepage'
import AboutMe from '../components/aboutpage/aboutme'
import Skills from '../components/skills/skills'
import Projects from '../components/projectpage/projects'
import Contact from '../components/contacts/contact'
import { BrowserRouter } from 'react-router-dom'

const WholePage = () => {
  return(
    <>
      <BrowserRouter>
      <div className={styles.wholePage}>
        <NavBar />
        <HomePage />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      </BrowserRouter>
    </>
  )
}

export default WholePage;