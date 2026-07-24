export function SkillsDetails({skillsArray}) {
  return (
    <section className="skillsDetails">
      <ul>
        {skillsArray.map(entry => 
          <SkillEntry key={entry.id} {...entry}/>
        )}
      </ul>
    </section>
  )
}

function SkillEntry({skill}) {
  return (
    <li>
      <div className="resumeEntry skillEntry">
        <p>{skill}</p>
      </div>
    </li>
  )
}