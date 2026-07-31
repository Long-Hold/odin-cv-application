import "./styles/ResumeTemplate.css";

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
      <p className="date">{dateRange}</p>
      <p className="multiLine">{jobDescription}</p>
    </section>
  )
}