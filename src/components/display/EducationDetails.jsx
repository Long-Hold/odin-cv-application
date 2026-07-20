export function EducationDetails({educationArray}) {
  return (
    <section className="educationDetails">
      {educationArray.map(entry =>
        <EducationEntry 
          key={entry.id}
          schoolName={entry.schoolName}
          degree={entry.degree}
          dateRange={entry.dateRange}
        />
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