import styles from "./styles/ResumeTemplate.module.css"

export function WorkExperienceDetails({workExperienceArray}) {
  return (
    <section className="workExperienceDetails">
      <h2>Experience</h2>
      {workExperienceArray.map(entry => <WorkExperienceEntry key={entry.id} {...entry} />)}
    </section>
  )
}

function WorkExperienceEntry({companyName, position, jobDescription, dateRange}) {
  return (
    <section className="resumeEntry workExperienceEntry">
      <h3>{companyName}</h3>
      <p>{position}</p>
      <p>{dateRange}</p>
      <p className={styles.multiLine}>{jobDescription}</p>
    </section>
  )
}