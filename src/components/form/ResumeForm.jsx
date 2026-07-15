import { ContactFields } from "./ContactFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";

export function ResumeForm({resumeObject, handleContactChange, handleEntryFieldChange, addNewResumeData, removeResumeEntry}) {
  return (
    <section className="resumeFormSection">
      <form 
        className="resumeDetailsForm"
        onSubmit={(event) => event.preventDefault}
        noValidate
      >
        <ContactFields 
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
      </form>
    </section>
  )
}