import './App.css'
import { useResumeState } from './hooks/useResumeState';
import { ContactFields } from './components/form/ContactFields'
import { EducationFields } from './components/form/EducationFields';
import { WorkExperienceFields } from './components/form/WorkExperienceFields';

function App() {
  /**
   * Shared state object that reflects what the user types into the form.
   * As the user enters data into the form, this object receives the most current state, and
   * reflects it in the resume template.
   */
  const {resume, handleContactChange, handleEntryFieldChange, addNewResumeData} = useResumeState();

  return (
    <>
     <ContactFields onChange={handleContactChange} resumeData={resume} />
     <EducationFields onChange={handleEntryFieldChange} resumeData={resume.education} addField={addNewResumeData} />
     <WorkExperienceFields onChange={handleEntryFieldChange} resumeData={resume.workExperience} addField={addNewResumeData} />
    </>
  )
}

export default App
