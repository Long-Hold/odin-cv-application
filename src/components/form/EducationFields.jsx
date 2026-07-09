import { FormField } from "./FormField";

export function EducationFields({onChange, resumeData, addField}) {
  return (
    <>
      <fieldset className="educationFields">
        <legend>Education</legend>
        <button type="button" data-field-type="education" onClick={addField}>Add Education Field</button>
      </fieldset>
    </>
  )
}