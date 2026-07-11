import { useState } from 'react'
import './App.css'
import { ContactFields } from './components/form/ContactFields'
import { EducationFields } from './components/form/EducationFields';
import { createEducationEntry } from './utils/resumeTemplates';
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

  const handleEntryFieldChange = (event) => {
    const {name, value} = event.currentTarget;
    const fieldType = event.currentTarget.dataset.fieldType;
    const entryId = event.currentTarget.dataset.entryId;

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

  const addNewResumeData = (event) => {
    const fieldType = event.currentTarget.dataset.fieldType;
    setResume((prevResume) => {
      if (fieldType === RESUME_KEYS.EDUCATION) {
        return { 
          ...prevResume,
          education: [
            ...prevResume.education,
            createEducationEntry(),
          ]
        }
      }
    });
  }

  return (
    <>
     <ContactFields onChange={handleResumeInput} resumeData={resume} />
     <EducationFields onChange={handleEntryFieldChange} resumeData={resume.education} addField={addNewResumeData} fieldType={RESUME_KEYS.EDUCATION}/>
    </>
  )
}

export default App
