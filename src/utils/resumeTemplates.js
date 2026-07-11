import { EDUCATION_KEYS, WORK_EXPERIENCE_KEYS } from "../constants/resumeKeys"

/**
 * @typedef {Object} EducationTemplate
 * @property {string} id - A unique UUID v4 identifier used as a React list key.
 * @property {string} schoolName - The name of the educational institution.
 * @property {string} degree - The degree, diploma, or certificate earned.
 * @property {string} dateRange - The duration of study (e.g., "2020 - 2024").
 */

/**
* Creates a blank education entry by deriving field keys from {@link EDUCATION_KEYS}.
* The resulting object is designed to be appended to a React state array.
*
* @see EDUCATION_KEYS
* @returns {EducationTemplate} A fresh education template object with a unique ID.
*/
export function createEducationEntry() {
  const educationEntries = Object.fromEntries(
    Object.values(EDUCATION_KEYS).map(key => [key, ""])
  );
  return {
    id: crypto.randomUUID(),
    ...educationEntries,
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
 * Creates a blank workExperience entry by deriving field keys from {@link WORK_EXPERIENCE_KEYS}.
 * The resulting object is designed to be appended to a React state array.
 * 
 * @see WORK_EXPERIENCE_KEYS
 * @returns {WorkExperienceTemplate} A fresh work experience template object with a unique ID.
 */
export function createWorkExperienceEntry() {
  const workExperienceEntries = Object.fromEntries(
    Object.values(WORK_EXPERIENCE_KEYS).map(key => [key, ""])
  );
  return {
    id: crypto.randomUUID(),
    ...workExperienceEntries,
  }
}