import "./styles/ResumeTemplate.css";

export function PersonalDetails({name, email, number, summary}) {
  return (
    <section className="personalDetails">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{number}</p>
      <p className="multiLine">{summary}</p>
    </section>
  )
}