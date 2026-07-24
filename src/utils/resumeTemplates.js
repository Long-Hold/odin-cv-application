import { EDUCATION_KEYS, RESUME_KEYS, SKILLS_KEYS, WORK_EXPERIENCE_KEYS } from "../constants/resumeKeys"

const ENTRY_KEYS_MAP = {
  [RESUME_KEYS.EDUCATION]: EDUCATION_KEYS,
  [RESUME_KEYS.WORK_EXPERIENCE]: WORK_EXPERIENCE_KEYS,
  [RESUME_KEYS.SKILLS]: SKILLS_KEYS,
}

export function createResumeEntry(fieldType) {
  const entries = Object.fromEntries(
    Object.values(ENTRY_KEYS_MAP[fieldType]).map(key => [key, ""])
  );

  return {
    id: crypto.randomUUID(),
    ...entries
  }
}