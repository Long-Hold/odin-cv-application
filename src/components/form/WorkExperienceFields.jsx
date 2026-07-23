import { RESUME_KEYS, WORK_EXPERIENCE_KEYS } from "../../constants/resumeKeys"
import { FormField } from "./FormField"
import { CollapsibleFieldEntry } from "./CollapsibleFieldEntry"

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
  },
  {
    name: WORK_EXPERIENCE_KEYS.JOB_DESCRIPTION,
    label: "Job Description",
    multiLine: true,
    placeholder: "I took a hands-on approach with the projects handed to me, particularly with the shader algorithms to...",
  }
]

export function WorkExperienceFields({onChange, resumeData, addField, removeEntry}) {
  return (
    <>
      <fieldset className="workExperienceFields">
        <legend>Work Experience</legend>
        <ol>
          {resumeData.map(entry => <WorkExperienceEntry key={entry.id} entry={entry} onChange={onChange} removeEntry={removeEntry} />)}
        </ol>
        <button type="button" onClick={() => addField(RESUME_KEYS.WORK_EXPERIENCE)}>Add Work Experience</button>
      </fieldset>
    </>
  )
}

function WorkExperienceEntry({entry, onChange, removeEntry}) {
  return (
    <li>
      <CollapsibleFieldEntry
        detailsClass={"resumeEntry workExperienceEntry"}
        summaryText={entry[WORK_EXPERIENCE_KEYS.COMPANY_NAME] ? entry[WORK_EXPERIENCE_KEYS.COMPANY_NAME] : "New Work Experience Entry"}
        legendText={"Work Experience Entry"}
        entryComponent={workExperienceFieldsConfig.map(field => (
          <FormField 
            key={field.name}
            value={entry[field.name]}
            onChange={(event) => onChange(RESUME_KEYS.WORK_EXPERIENCE, entry.id, field.name, event.currentTarget.value)}
            entryId={entry.id}
            {...field}
          />
        ))}
      />
      <button type="button" onClick={() => removeEntry(RESUME_KEYS.WORK_EXPERIENCE, entry.id)}>Remove Entry</button>
    </li>
  )
}