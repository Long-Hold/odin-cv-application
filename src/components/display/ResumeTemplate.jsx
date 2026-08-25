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
        <div className="detailColumn">
          <PersonalDetails 
            name={resumeObject.name}
            email={resumeObject.email}
            number={resumeObject.number}
            summary={resumeObject.summary}
          />
          <SkillsDetails 
            skillsArray={resumeObject.skills}
          />
        </div>

        <div className="detailColumn">
          <WorkExperienceDetails 
            workExperienceArray={resumeObject.workExperience}
          />
          <EducationDetails 
            educationArray={resumeObject.education}
          />
        </div>
      </section>
    </div>
  )
}