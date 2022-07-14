import NavBar from '../components/navbar/navbar'
import styles from './page.module.css'
import HomePage from '../components/homepage/homepage'
import AboutMe from '../components/aboutpage/aboutme'
import Projects from '../components/projectpage/projects'
import { BrowserRouter } from 'react-router-dom'

const WholePage = () => {
  return(
    <>
      <BrowserRouter>
      <div className={styles.wholePage}>
        <NavBar />
        <HomePage />
        <AboutMe />
        <Projects />
      </div>
      </BrowserRouter>
    </>
  )
}

export default WholePage;