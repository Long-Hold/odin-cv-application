import "./styles/ResumeTemplate.css";

export function WorkExperienceDetails({workExperienceArray}) {
  return (
    <section className="workExperienceDetails">
      <h2>EXPERIENCE</h2>
      {workExperienceArray.map(entry => <WorkExperienceEntry key={entry.id} {...entry} />)}
    </section>
  )
}

function WorkExperienceEntry({companyName, position, jobDescription, dateRange}) {
  return (
    <section className="resumeEntry workExperienceEntry">
      <h3>{companyName}</h3>
      <p className="position">{position}</p>
      <p className="date">{dateRange}</p>
      <p className="multiLine">{jobDescription}</p>
    </section>
  )
}