export function SkillsDetails({ skillsArray }) {
  return (
    <section className="skillsDetails">
      <h2>SKILLS</h2>
      <ul>
        {skillsArray.map((entry) => (
          <SkillEntry key={entry.id} {...entry} />
        ))}
      </ul>
    </section>
  );
}

function SkillEntry({ skill }) {
  return (
    <li className="resumeEntry skillEntry">
      <p>{skill}</p>
    </li>
  );
}
