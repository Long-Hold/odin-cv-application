import styles from "./styles/ResumeTemplate.module.css"

export function WorkExperienceDetails({workExperienceArray}) {
  return (
    <section className="workExperienceDetails">
      {workExperienceArray.map(entry => <WorkExperienceEntry key={entry.id} {...entry} />)}
    </section>
  )
}

function WorkExperienceEntry({companyName, position, jobDescription, dateRange}) {
  return (
    <section className="resumeEntry workExperienceEntry">
      <h2>{companyName}</h2>
      <p>{position}</p>
      <p>{dateRange}</p>
      <p className={styles.multiLine}>{jobDescription}</p>
    </section>
  )
}