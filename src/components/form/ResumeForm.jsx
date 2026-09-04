import { PersonalFields } from "./PersonalFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";
import { SkillsFields } from "./SkillsFields";
import "./styles/formStyles.css";
import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import { mdiEyeOutline, mdiFilePdfBox } from "@mdi/js";
import { pdf } from "@react-pdf/renderer";
import { ResumePdfDocument } from "../pdf/ResumePdfDocument";
import { mdiDelete } from "@mdi/js";

export function ResumeForm({
  resumeObject,
  handleContactChange,
  handleEntryFieldChange,
  addNewResumeData,
  removeResumeEntry,
  clearAllInfo,
}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const [isFormOpen, setFormState] = useState(true);
  const toggleForm = () => {
    setFormState((prevState) => !prevState);
  };

  const openPDFWindow = async () => {
    const printWindow = window.open("", "_blank");
    setIsGenerating(true);
    try {
      const blob = await pdf(<ResumePdfDocument resume={resumeObject} />).toBlob();
      const url = URL.createObjectURL(blob);
      if (printWindow) printWindow.location = url;
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="sidebar">
      <header className="formVisibilityControls">
        <button
          type="button"
          className="headerBtn removeEntryBtn"
          onClick={clearAllInfo}
        >
          <Icon path={mdiDelete} size={1}></Icon>clear all
        </button>
        <button
          type="button"
          className="headerBtn exportPrint"
          onClick={openPDFWindow}
          disabled={isGenerating}
        >
          <Icon path={mdiFilePdfBox} size={1} />
          {isGenerating ? "generating PDF" : "preview PDF"}
        </button>
        <button
          type="button"
          className="headerBtn toggleHideFormBtn"
          onClick={toggleForm}
          aria-expanded={isFormOpen}
        >
          <Icon path={isFormOpen ? mdiEyeOutline : mdiPencilOutline} size={1} />
          {isFormOpen ? "view resume" : "edit resume"}
        </button>
      </header>
      <section className={`resumeFormSection${isFormOpen ? "" : " hide"}`}>
        <form
          className="resumeDetailsForm"
          onSubmit={(event) => event.preventDefault()}
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
    </div>
  );
}
