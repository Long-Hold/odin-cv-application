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

  return (
    <>
     <ContactFields onChange={handleResumeInput} resumeData={resume} />
     <EducationFields onChange={handleResumeInput} resumeData={resume} addField={addNewResumeData}/>
    </>
  )
}

export default App
