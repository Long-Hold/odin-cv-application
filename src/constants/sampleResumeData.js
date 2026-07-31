import { RESUME_KEYS, EDUCATION_KEYS, WORK_EXPERIENCE_KEYS, SKILLS_KEYS } from "./resumeKeys";

export const sampleResumeData = {
  [RESUME_KEYS.NAME]: "Jane Doe",
  [RESUME_KEYS.EMAIL]: "jane.doe@example.com",
  [RESUME_KEYS.NUMBER]: "+1 555 123 4567",
  [RESUME_KEYS.SUMMARY]: "Front-end developer with a passion for building clean, accessible interfaces.",
  [RESUME_KEYS.EDUCATION]: [
    {
      id: crypto.randomUUID(),
      [EDUCATION_KEYS.SCHOOL_NAME]: "Harvard University",
      [EDUCATION_KEYS.DEGREE]: "B.Sc. Computer Science",
      [EDUCATION_KEYS.DATE_RANGE]: "2020.09 - 2024.04",
    },
  ],
  [RESUME_KEYS.WORK_EXPERIENCE]: [
    {
      id: crypto.randomUUID(),
      [WORK_EXPERIENCE_KEYS.COMPANY_NAME]: "NVIDIA Corporation",
      [WORK_EXPERIENCE_KEYS.POSITION]: "Senior Front-End Engineer",
      [WORK_EXPERIENCE_KEYS.DATE_RANGE]: "2020.09 - ongoing",
      [WORK_EXPERIENCE_KEYS.JOB_DESCRIPTION]: "Took a hands-on approach with the projects handed to me, particularly with the shader algorithms.",
    },
  ],
  [RESUME_KEYS.SKILLS]: [
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "JavaScript" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "React" },
  ],
};