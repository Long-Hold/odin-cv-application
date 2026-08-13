import { PersonalFields } from "./PersonalFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";
import { SkillsFields } from "./SkillsFields";
import "./styles/formStyles.css"
import { useState } from "react";

export function ResumeForm({resumeObject, handleContactChange, handleEntryFieldChange, addNewResumeData, removeResumeEntry}) {
  const [isFormOpen, setFormState] = useState(true);
  const toggleForm = () => {
    setFormState((prevState) => !prevState);
  };
  return (
    <>
      <header className="formVisibilityControls">
        <p>MY RESUME</p>
        <button
          type="button"
          className="toggleHideFormBtn"
          onClick={() => toggleForm()}
          aria-expanded={isFormOpen}
        >{isFormOpen ? "view resume" : "edit resume"}</button>
      </header>
      <section className={`resumeFormSection${isFormOpen ? "" : " hide"}`}>
        <form 
          className="resumeDetailsForm"
          onSubmit={(event) => event.preventDefault}
          noValidate
        >
          <PersonalFields 
            onChange={handleContactChange} 
            resumeData={resumeObject} 
          />

          <SkillsFields 
            onChange={handleEntryFieldChange}
            resumeData={resumeObject.skills}
            addField={addNewResumeData}
            removeEntry={removeResumeEntry}
          />

          <WorkExperienceFields
            onChange={handleEntryFieldChange} 
            resumeData={resumeObject.workExperience} 
            addField={addNewResumeData} 
            removeEntry={removeResumeEntry}
          />

          <EducationFields 
            onChange={handleEntryFieldChange} 
            resumeData={resumeObject.education} 
            addField={addNewResumeData} 
            removeEntry={removeResumeEntry}
          />
        </form>
      </section>
    </>
  )
}