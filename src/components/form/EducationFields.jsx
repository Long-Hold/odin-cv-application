import { FormField } from "./FormField";
import { EDUCATION_KEYS, RESUME_KEYS } from "../../constants/resumeKeys";

const educationFieldsConfig = [
  {
    name: EDUCATION_KEYS.SCHOOL_NAME,
    label: "School Name",
    type: "text",
    placeholder: "Harvard University",
  },
  {
    name: EDUCATION_KEYS.DEGREE,
    label: "Degree / Certificate",
    type: "text",
    placeholder: "B.Sc. Computer Sciencce",
  },
  {
    name: EDUCATION_KEYS.DATE_RANGE,
    label: "Study Period",
    type: "text",
    placeholder: "2020.09 - 2024.04"
  }
]

export function EducationFields({onChange, resumeData, addField, removeEntry}) {
  return (
    <>
      <fieldset className="educationFields">
        <legend>Education</legend>
        {resumeData.map((entry, index) => <EducationEntry key={entry.id} index={index + 1} entry={entry} onChange={onChange} removeEntry={removeEntry} /> )}
        <button type="button" onClick={() => addField(RESUME_KEYS.EDUCATION)}>Add Education Field</button>
      </fieldset>
    </>
  )
}

function EducationEntry({index, entry, onChange, removeEntry}) {
  return (
    <fieldset className="resumeEntry educationEntry">
      <legend>Education Entry {index}</legend>
        {educationFieldsConfig.map(field => (
          <FormField 
            key={field.name}
            value={entry[field.name]}
            onChange={(event) => onChange(RESUME_KEYS.EDUCATION, entry.id, field.name, event.currentTarget.value)}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            entryId={entry.id}
          />
        ))}
        <button type="button" onClick={() => removeEntry(RESUME_KEYS.EDUCATION, entry.id)}>Remove Entry</button>
    </fieldset>
  )
}