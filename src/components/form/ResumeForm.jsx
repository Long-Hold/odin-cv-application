import { PersonalFields } from "./PersonalFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";
import { SkillsFields } from "./SkillsFields";

export function ResumeForm({resumeObject, handleContactChange, handleEntryFieldChange, addNewResumeData, removeResumeEntry}) {
  return (
    <section className="resumeFormSection">
      <form 
        className="resumeDetailsForm"
        onSubmit={(event) => event.preventDefault}
        noValidate
      >
        <PersonalFields 
          onChange={handleContactChange} 
          resumeData={resumeObject} 
        />

        <EducationFields 
          onChange={handleEntryFieldChange} 
          resumeData={resumeObject.education} 
          addField={addNewResumeData} 
          removeEntry={removeResumeEntry}
        />

        <WorkExperienceFields
          onChange={handleEntryFieldChange} 
          resumeData={resumeObject.workExperience} 
          addField={addNewResumeData} 
          removeEntry={removeResumeEntry}
        />

        <SkillsFields 
          onChange={handleEntryFieldChange}
          resumeData={resumeObject.skills}
          addField={addNewResumeData}
          removeEntry={removeResumeEntry}
        />
      </form>
    </section>
  )
}