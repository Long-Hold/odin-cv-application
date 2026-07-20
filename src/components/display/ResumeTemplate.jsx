import { EducationDetails } from "./EducationDetails";
import { PersonalDetails } from "./PersonalDetails";

export function ResumeTemplate({resumeObject}) {
  return (
    <section className="resumeTemplate">
      <PersonalDetails 
        name={resumeObject.name}
        email={resumeObject.email}
        number={resumeObject.number}
        summary={resumeObject.summary}
      />

      <EducationDetails 
        educationArray={resumeObject.education}
      />
    </section>
  )
}