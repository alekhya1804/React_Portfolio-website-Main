import styles from './skills.module.css'

const Skills = () => {
  return(
    <>
      <section className={styles.skills} id="skills">
        <h1 className={styles.title}>Skills</h1>
        <ul className={styles.lists}>
          <li className={styles.list}>HTML</li>
          <li className={styles.list}>CSS</li>
          <li className={styles.list}>Bootstrap</li>
          <li className={styles.list}>JavaScript</li>
          <li className={styles.list}>React</li>
          <li className={styles.list}>Back-end Development</li>
        </ul>
      </section>
    </>
  )
}

export default Skills;