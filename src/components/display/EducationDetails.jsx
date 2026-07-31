export function EducationDetails({educationArray}) {
  return (
    <section className="educationDetails">
      <h2>Education</h2>
      {educationArray.map(entry =>
        <EducationEntry key={entry.id} {...entry} />
      )}
    </section>
  )
}

function EducationEntry({schoolName, degree, dateRange}) {
  return (
    <section className=" resumeEntry educationEntry">
      <h3>{degree}</h3>
      <p>{schoolName}</p>
      <p>{dateRange}</p>
    </section>
  )
}