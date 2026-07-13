import { FormField } from "./FormField";
import { EDUCATION_KEYS } from "../../constants/resumeKeys";

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

export function EducationFields({onChange, resumeData, addField, fieldType}) {
  return (
    <>
      <fieldset className="educationFields">
        <legend>Education</legend>
        {resumeData.map(entry => <EducationEntry key={entry.id} entry={entry} onChange={onChange} fieldType={fieldType}/> )}
        <button type="button" data-field-type={fieldType} onClick={addField}>Add Education Field</button>
      </fieldset>
    </>
  )
}

function EducationEntry({entry, onChange, fieldType}) {
  return (
    <div>
      {educationFieldsConfig.map(field => (
        <FormField 
          key={field.name}
          value={entry[field.name]}
          onChange={onChange}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          entryId={entry.id}
          fieldType={fieldType}
        />
      ))}
    </div>
  )
}