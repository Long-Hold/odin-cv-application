import { useState } from 'react'
import './App.css'
import { ContactFields } from './components/form/ContactFields'

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

  return (
    <>
     <ContactFields />
    </>
  )
}

export default App
