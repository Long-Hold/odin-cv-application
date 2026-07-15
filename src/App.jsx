import './App.css'
import { useResumeState } from './hooks/useResumeState';
import { ResumeForm } from './components/form/ResumeForm';

function App() {
  /**
   * Shared state object that reflects what the user types into the form.
   * As the user enters data into the form, this object receives the most current state, and
   * reflects it in the resume template.
   */
  const {resume, handleContactChange, handleEntryFieldChange, addNewResumeData} = useResumeState();

  return (
    <>
      <ResumeForm 
        resumeObject={resume}
        handleContactChange={handleContactChange}
        handleEntryFieldChange={handleEntryFieldChange}
        addNewResumeData={addNewResumeData}
      />
    </>
  )
}

export default App
