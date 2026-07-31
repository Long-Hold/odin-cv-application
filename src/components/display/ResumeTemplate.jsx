import { EducationDetails } from "./EducationDetails";
import { PersonalDetails } from "./PersonalDetails";
import { SkillsDetails } from "./SkillsDetails";
import { WorkExperienceDetails } from "./WorkExperienceDetails";
import { useFitToContainer } from "../../hooks/useFitToContainer";
import { useRef } from "react";
import "./styles/ResumeTemplate.css";

export function ResumeTemplate({resumeObject}) {
  const resumeContainerRef = useRef(null);
  useFitToContainer(resumeContainerRef);
  return (
    <div ref={resumeContainerRef} className="resumeContainer">
      <section className="resumeTemplate">
        <PersonalDetails 
          name={resumeObject.name}
          email={resumeObject.email}
          number={resumeObject.number}
          summary={resumeObject.summary}
        />

        <WorkExperienceDetails 
          workExperienceArray={resumeObject.workExperience}
        />

        <SkillsDetails 
          skillsArray={resumeObject.skills}
        />

        <EducationDetails 
          educationArray={resumeObject.education}
        />
      </section>
    </div>
  )
}