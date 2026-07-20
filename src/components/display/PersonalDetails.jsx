import styles from "./styles/ResumeTemplate.module.css"

export function PersonalDetails({name, email, number, summary}) {
  return (
    <section className="personalDetails">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{number}</p>
      <p className={styles.multiLine}>{summary}</p>
    </section>
  )
}