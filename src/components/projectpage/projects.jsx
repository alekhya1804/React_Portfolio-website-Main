import styles from './project.module.css'
import Project from './project'

const Projects = () => {
  return(
    <>
      <section className={styles.project} id="projects">
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projectCard}>
          <Project />
        </div>
      </section>
    </>
  )
}

export default Projects;