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
      [EDUCATION_KEYS.DEGREE]: "Ph.D Computer Science",
      [EDUCATION_KEYS.DATE_RANGE]: "2026.09 - 2028.04",
    },
    {
      id: crypto.randomUUID(),
      [EDUCATION_KEYS.SCHOOL_NAME]: "Yale University",
      [EDUCATION_KEYS.DEGREE]: "Masters Computer Science",
      [EDUCATION_KEYS.DATE_RANGE]: "2024.09 - 2026.04",
    },
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
      [WORK_EXPERIENCE_KEYS.JOB_DESCRIPTION]: [
        "I took ownership of complex rendering pipelines, writing custom GLSL shader algorithms from scratch.",
        "Instead of relying on off-the-shelf effects, I engineered bespoke lighting, refraction, and particle shaders while actively profiling frame rates to guarantee a smooth 60 FPS across both desktop and mobile hardware."
      ].join('\n\n'),
    },
    {
      id: crypto.randomUUID(),
      [WORK_EXPERIENCE_KEYS.COMPANY_NAME]: "Freelance Web Developer",
      [WORK_EXPERIENCE_KEYS.POSITION]: "Front-End Engineer",
      [WORK_EXPERIENCE_KEYS.DATE_RANGE]: "2018.09 - 2020.08",
      [WORK_EXPERIENCE_KEYS.JOB_DESCRIPTION]: [
        "I build front-end websites on short-term contracts; handling everything from UIs and API integrations to hosting.",
        "I'm big on accessibility, making sure every site hits WCAG standards so anyone can use it. I also keep tech stacks as simple and lightweight as possible, using only what the project actually needs."
      ].join('\n\n'),
    },
    {
      id: crypto.randomUUID(),
      [WORK_EXPERIENCE_KEYS.COMPANY_NAME]: "Graphix World",
      [WORK_EXPERIENCE_KEYS.POSITION]: "Vinyl Graphic Designer",
      [WORK_EXPERIENCE_KEYS.DATE_RANGE]: "2016.02 - 2018.01",
      [WORK_EXPERIENCE_KEYS.JOB_DESCRIPTION]: [
        "I was responsible for creating and editing designs that we would use for our vinyl wraps, stickers, and decals in Adobe Illustrator and Photoshop.",
        "Additionally, I was responsible for setting up and running the online shop for Sekanskin. Duties included creating listings, promotions, and handling customer consultations and transactions.",
        "We had particular success in niche markets such as custom vinyl Cornhole skins and brand decal creation, and were topping the search results on platforms such as Etsy in this market."
      ].join('\n\n'),
    },
  ],
  [RESUME_KEYS.SKILLS]: [
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "JavaScript" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "React" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "Python" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "HTML5" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "CSS3 / SASS" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "Vite" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "Git / Github" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "Automated Testing" },
    { id: crypto.randomUUID(), [SKILLS_KEYS.SKILL]: "Responsive Design" },
  ],
};