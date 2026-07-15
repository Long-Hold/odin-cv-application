import { ContactFields } from "./ContactFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";

export function ResumeForm({resumeObject, handleContactChange, handleEntryFieldChange, addNewResumeData}) {
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
        />

        <WorkExperienceFields
          onChange={handleEntryFieldChange} 
          resumeData={resumeObject.workExperience} 
          addField={addNewResumeData} 
        />
      </form>
    </section>
  )
}