import { useState } from 'react'
import './App.css'
import { ContactFields } from './components/form/ContactFields'
import { EducationFields } from './components/form/EducationFields';
import { createEducationEntry, createWorkExperienceEntry } from './utils/resumeTemplates';
import { RESUME_KEYS } from './constants/resumeKeys';

function App() {
  /**
   * Shared state object that reflects what the user types into the form.
   * As the user enters data into the form, this object receives the most current state, and
   * reflects it in the resume template.
   */
  const [resume, setResume] = useState(() => {
    const entries = Object.values(RESUME_KEYS).map((key) => {
      if (key === RESUME_KEYS.EDUCATION || key === RESUME_KEYS.WORK_EXPERIENCE)
        return [key, []];
      return [key, ''];
    })

    return Object.fromEntries(entries);
  });

  const handleResumeInput = (event) => {
    const {name, value} = event.currentTarget;
    setResume((prevResume) => {
      return {
        ...prevResume,
        [name]: value
      }
    });
  }

  const handleEntryFieldChange = (fieldType, entryId, name, value) => {
    setResume((prevResume) => {
      const updatedArray = prevResume[fieldType].map((entry) => {
        return entry.id === entryId ? {...entry, [name]: value} : entry
      });
      
      return {
        ...prevResume,
        [fieldType] : updatedArray
      }
    })
  }

  const addNewResumeData = (fieldType) => {
    setResume((prevResume) => ({
      ...prevResume,
      [fieldType]: [
        ...prevResume[fieldType],
        fieldType === RESUME_KEYS.EDUCATION ? createEducationEntry() : createWorkExperienceEntry()
      ]
    }));
  }

  return (
    <>
     <ContactFields onChange={handleResumeInput} resumeData={resume} />
     <EducationFields onChange={handleEntryFieldChange} resumeData={resume.education} addField={addNewResumeData} />
    </>
  )
}

export default App
