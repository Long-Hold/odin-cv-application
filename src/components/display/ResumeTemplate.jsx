import { EducationDetails } from "./EducationDetails";
import { PersonalDetails } from "./PersonalDetails";
import { SkillsDetails } from "./SkillsDetails";
import { WorkExperienceDetails } from "./WorkExperienceDetails";
import { useFitToContainer } from "../../hooks/useFitToContainer";
import styles from "./styles/ResumeTemplate.module.css";
import { useRef } from "react";

export function ResumeTemplate({resumeObject}) {
  const resumeContainerRef = useRef(null);
  useFitToContainer(resumeContainerRef);
  return (
    <div ref={resumeContainerRef} className={styles.resumeContainer}>
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
    </div>
  )
}