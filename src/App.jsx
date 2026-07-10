import { useState } from 'react'
import './App.css'
import { ContactFields } from './components/form/ContactFields'
import { EducationFields } from './components/form/EducationFields';
import { createEducationEntry } from './utils/resumeTemplates';

function App() {
  /**
   * Shared state object that reflects what the user types into the form.
   * As the user enters data into the form, this object receives the most current state, and
   * reflects it in the resume template.
   */
  const [resume, setResume] = useState(() => ({
    name: '',
    email: '',
    number: '',
    education: [],
    workExperience: []
  }));

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
    console.log(resume.education)
    const fieldType = event.currentTarget.dataset.fieldType;
    setResume((prevResume) => {
      if (fieldType === 'education') {
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

  const educationFieldType = "education";

  return (
    <>
     <ContactFields onChange={handleResumeInput} resumeData={resume} />
     <EducationFields onChange={handleEntryFieldChange} resumeData={resume.education} addField={addNewResumeData} fieldType={educationFieldType}/>
    </>
  )
}

export default App
