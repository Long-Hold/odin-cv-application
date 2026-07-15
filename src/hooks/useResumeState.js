import { useState } from "react";
import { RESUME_KEYS } from "../constants/resumeKeys";
import { createEducationEntry, createWorkExperienceEntry } from "../utils/resumeTemplates";


/**
 * Custom hook that owns the resume's shared state and all state-mutation logic.
 * Centralizes the `resume` object alongside the handlers that update it, so
 * components consuming this hook don't need direct access to `setResume`.
 *
 * @see RESUME_KEYS
 * @see createEducationEntry
 * @see createWorkExperienceEntry
 *
 * @returns {Object} An object containing:
 * @returns {Object} return.resume - The current resume state object.
 * @returns {function} return.handleResumeInput - Updates a top-level resume field (e.g. name, email, number).
 * @returns {function} return.handleEntryFieldChange - Updates a single field within an education or work experience entry, matched by entry id.
 * @returns {function} return.addNewResumeData - Appends a new blank entry (education or work experience) to the corresponding array.
 */
export function useResumeState() {
  const [resume, setResume] = useState(() => {
    const entries = Object.values(RESUME_KEYS).map((key) => {
      if (key === RESUME_KEYS.EDUCATION || key === RESUME_KEYS.WORK_EXPERIENCE)
        return [key, []];
      return [key, ''];
    })

    return Object.fromEntries(entries);
  });

  const handleResumeInput = (name, value) => {
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

  return {
    resume,
    handleResumeInput,
    handleEntryFieldChange,
    addNewResumeData
  }
}