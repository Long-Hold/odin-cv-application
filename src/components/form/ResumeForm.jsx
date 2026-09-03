import { PersonalFields } from "./PersonalFields";
import { EducationFields } from "./EducationFields";
import { WorkExperienceFields } from "./WorkExperienceFields";
import { SkillsFields } from "./SkillsFields";
import "./styles/formStyles.css";
import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiPencilOutline } from "@mdi/js";
import { mdiEyeOutline, mdiFilePdfBox, mdiCloseBoxOutline } from "@mdi/js";
import { PDFViewer } from "@react-pdf/renderer";
import { ResumePdfDocument } from "../pdf/ResumePdfDocument";
import { useRef } from "react";
import { useEffect } from "react";
import { mdiDelete } from "@mdi/js";

export function ResumeForm({
  resumeObject,
  handleContactChange,
  handleEntryFieldChange,
  addNewResumeData,
  removeResumeEntry,
  clearAllInfo,
}) {
  const [isFormOpen, setFormState] = useState(true);
  const [isPDFOpen, setPDFState] = useState(false);
  const toggleForm = () => {
    setFormState((prevState) => !prevState);
  };

  // Sets the isPDFOpen state to false for any closure methods on the modal (hitting esc, clicking elsewhere)
  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    const handleClose = () => setPDFState(false);
    dialogEl.addEventListener("close", handleClose);
    return () => dialogEl.removeEventListener("close", handleClose);
  }, []);

  const dialogRef = useRef(null);
  const toggleModal = () => {
    if (!dialogRef.current) return;

    if (dialogRef.current.open) {
      dialogRef.current.close();
    } else {
      setPDFState(true);
      dialogRef.current.showModal();
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
          onClick={toggleModal}
        >
          <Icon path={mdiFilePdfBox} size={1} />
          preview PDF
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
      <dialog ref={dialogRef} aria-label="PDF Preview" closedby="any">
        <header>
          <button
            type="button"
            className="headerBtn closeModalBtn"
            onClick={toggleModal}
          >
            <Icon path={mdiCloseBoxOutline} size={1} />
            close preview
          </button>
        </header>
        {isPDFOpen && (
          <PDFViewer
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              height: "100dvh",
            }}
          >
            <ResumePdfDocument resume={resumeObject} />
          </PDFViewer>
        )}
      </dialog>
    </div>
  );
}
