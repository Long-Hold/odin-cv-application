import { RESUME_KEYS, WORK_EXPERIENCE_KEYS } from "../../constants/resumeKeys"
import { FormField } from "./FormField"

const workExperienceFieldsConfig = [
  {
    name: WORK_EXPERIENCE_KEYS.COMPANY_NAME,
    label: "Company Name",
    type: "text",
    placeholder: "NVIDIA Corporation",
  },
  {
    name: WORK_EXPERIENCE_KEYS.POSITION,
    label: "Position",
    type: "text",
    placeholder: "Senior Front-End Engineer",
  },
  {
    name: WORK_EXPERIENCE_KEYS.DATE_RANGE,
    label: "Employment Term",
    type: "text",
    placeholder: "2020.09 - ongoing"
  }
]

export function WorkExperienceFields({onChange, resumeData, addField}) {
  return (
    <>
      <fieldset className="workExperienceFields">
        <legend>Work Experience</legend>
        {resumeData.map((entry, index) => <WorkExperienceEntry key={entry.id} index={index + 1} entry={entry} onChange={onChange} />)}
        <button type="button" onClick={() => addField(RESUME_KEYS.WORK_EXPERIENCE)}>Add Work Experience</button>
      </fieldset>
    </>
  )
}

function WorkExperienceEntry({index, entry, onChange}) {
  return (
    <fieldset className="resumeEntry workExperienceEntry">
      <legend>Work Experience Entry {index}</legend>
        {workExperienceFieldsConfig.map(field => (
          <FormField 
            key={field.name}
            value={entry[field.name]}
            onChange={(event) => onChange(RESUME_KEYS.WORK_EXPERIENCE, entry.id, field.name, event.currentTarget.value)}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            entryId={entry.id}
          />
        ))}
    </fieldset>
  )
}