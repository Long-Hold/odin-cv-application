/**
 * @typedef {Object} EducationTemplate
 * @property {string} id - A unique UUID v4 identifier used as a React list key.
 * @property {string} schoolName - The name of the educational institution.
 * @property {string} degree - The degree, diploma, or certificate earned.
 * @property {string} dateRange - The duration of study (e.g., "2020 - 2024").
 */

/**
 * Creates a blank education entry template to populate dynamic form fields.
 * This object is designed to be appended to a React state array.
 * 
 * @returns {EducationTemplate} A fresh education template object with a unique ID.
 */
export function createEducationEntry() {
  return {
    id: crypto.randomUUID(),
    schoolName: '',
    degree: '',
    dateRange: '',
  }
}

/**
 * @typedef {Object} WorkExperienceTemplate
 * @property {string} id - A unique UUID v4 identifier used as a React list key.
 * @property {string} companyName - The name of the employing company.
 * @property {string} position - The job title held.
 * @property {string} jobDescription - Brief summary of responsibilities or achievements.
 * @property {string} dateRange - The period of employment (e.g., "2024 - Present").
 */

/**
 * Creates a blank work experience entry template to populate dynamic form fields.
 * This object is designed to be appended to a React state array.
 * 
 * @returns {WorkExperienceTemplate} A fresh work experience template object with a unique ID.
 */
export function createWorkExperienceEntry() {
  return {
    id: crypto.randomUUID(),
    companyName: '',
    position: '',
    jobDescription: '',
    dateRange: '',
  }
}