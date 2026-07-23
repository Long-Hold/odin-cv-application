import { FormField } from "./FormField";
import { EDUCATION_KEYS, RESUME_KEYS } from "../../constants/resumeKeys";
import { CollapsibleFieldEntry } from "./CollapsibleFieldEntry";

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
        <ol>
          {resumeData.map(entry => <EducationEntry key={entry.id} entry={entry} onChange={onChange} removeEntry={removeEntry} /> )}
        </ol>
        <button type="button" onClick={() => addField(RESUME_KEYS.EDUCATION)}>Add Education Field</button>
      </fieldset>
    </>
  )
}

function EducationEntry({entry, onChange, removeEntry}) {
  return (
    <li>
      <CollapsibleFieldEntry
        detailsClass={"resumeEntry educationEntry"}
        summaryText={entry[EDUCATION_KEYS.SCHOOL_NAME] ? entry[EDUCATION_KEYS.SCHOOL_NAME] : "New Education Entry"}
        legendText={"Education Entry"}
        entryComponent={educationFieldsConfig.map(field => (
          <FormField 
            key={field.name}
            value={entry[field.name]}
            onChange={(event) => onChange(RESUME_KEYS.EDUCATION, entry.id, field.name, event.currentTarget.value)}
            entryId={entry.id}
            {...field}
          />
        ))}
      />
      <button type="button" onClick={() => removeEntry(RESUME_KEYS.EDUCATION, entry.id)}>Remove Entry</button>
    </li>
  )
}