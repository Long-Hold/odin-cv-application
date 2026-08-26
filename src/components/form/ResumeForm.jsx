import { PersonalFields } from "./PersonalFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";
import { SkillsFields } from "./SkillsFields";
import "./styles/formStyles.css"
import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiPencilOutline } from '@mdi/js';
import { mdiEyeOutline, mdiExportVariant } from '@mdi/js';
import { PDFViewer } from "@react-pdf/renderer";
import { ResumePdfDocument } from "../pdf/ResumePdfDocument";

export function ResumeForm({resumeObject, handleContactChange, handleEntryFieldChange, addNewResumeData, removeResumeEntry}) {
  const [isFormOpen, setFormState] = useState(true);
  const toggleForm = () => {
    setFormState((prevState) => !prevState);
  };
  return (
    <div className="sidebar">
      <header className="formVisibilityControls">
        <button
          type="button"
          className="headerBtn exportPrint"
          onClick={() => window.print()}
        ><Icon path={mdiExportVariant} size={1} />print / export PDF</button>
        <button
          type="button"
          className="headerBtn toggleHideFormBtn"
          onClick={() => toggleForm()}
          aria-expanded={isFormOpen}
        >
          <Icon path={isFormOpen ? mdiEyeOutline : mdiPencilOutline} size={1} />
          {isFormOpen ? "view resume" : "edit resume"}
        </button>
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
      <dialog open>
        <PDFViewer style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh', 
          height: '100dvh'}}>
          <ResumePdfDocument resume={resumeObject}/>
        </PDFViewer>
      </dialog>
    </div>
  )
}