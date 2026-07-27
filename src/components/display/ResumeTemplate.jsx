import { EducationDetails } from "./EducationDetails";
import { PersonalDetails } from "./PersonalDetails";
import { SkillsDetails } from "./SkillsDetails";
import { WorkExperienceDetails } from "./WorkExperienceDetails";
import styles from "./styles/ResumeTemplate.module.css";

export function ResumeTemplate({resumeObject}) {
  return (
    <section className={styles.resumeTemplate}>
      <PersonalDetails 
        name={resumeObject.name}
        email={resumeObject.email}
        number={resumeObject.number}
        summary={resumeObject.summary}
      />

      <EducationDetails 
        educationArray={resumeObject.education}
      />

      <WorkExperienceDetails 
        workExperienceArray={resumeObject.workExperience}
      />

      <SkillsDetails 
        skillsArray={resumeObject.skills}
      />
    </section>
  )
}