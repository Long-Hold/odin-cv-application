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

export const EDUCATION_KEYS = {
  SCHOOL_NAME: 'schoolName',
  DEGREE: 'degree',
  DATE_RANGE: 'dateRange',
}

export const WORK_EXPERIENCE_KEYS = {
  COMPANY_NAME: 'companyName',
  POSITION: 'position',
  JOB_DESCRIPTION: 'jobDescription',
  DATE_RANGE: 'dateRange',
}