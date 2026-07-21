export function EducationDetails({educationArray}) {
  return (
    <section className="educationDetails">
      {educationArray.map(entry =>
        <EducationEntry key={entry.id} {...entry} />
      )}
    </section>
  )
}

function EducationEntry({schoolName, degree, dateRange}) {
  return (
    <section className=" resumeEntry educationEntry">
      <h2>{schoolName}</h2>
      <p>{degree}</p>
      <p>{dateRange}</p>
    </section>
  )
}