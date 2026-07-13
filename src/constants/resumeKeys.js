/**
 * These object's provides the names used to for the Keys in the resume state object,
 * as well as the name property for the input form elements.
 * 
 * I made them so I don't keep hard coding their values in and can instead reuse the
 * variables.
 */
export const RESUME_KEYS = {
  NAME: 'name',
  EMAIL: 'email',
  NUMBER: 'number',
  EDUCATION: 'education',
  WORK_EXPERIENCE: 'workExperience',
}

/**
 * This object exports key names used by nested objects, e.g: education: [{object}]
 */
export const EDUCATION_KEYS = {
  SCHOOL_NAME: 'schoolName',
  DEGREE: 'degree',
  DATE_RANGE: 'dateRange',
}

/**
 * This object exports key names intended to be used by nested objects, e.g: workExperience: [{object}]
 */
export const WORK_EXPERIENCE_KEYS = {
  COMPANY_NAME: 'companyName',
  POSITION: 'position',
  JOB_DESCRIPTION: 'jobDescription',
  DATE_RANGE: 'dateRange',
}