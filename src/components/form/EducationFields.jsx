import { FormField } from "./FormField";
import { EDUCATION_KEYS, RESUME_KEYS } from "../../constants/resumeKeys";

export function EducationFields({onChange, resumeData, addField, fieldType}) {
  return (
    <>
      <fieldset className="educationFields">
        <legend>Education</legend>
        {resumeData.map(entry => <EducationEntry key={entry.id} id={entry.id} onChange={onChange} fieldType={fieldType}/> )}
        <button type="button" data-field-type={RESUME_KEYS.EDUCATION} onClick={addField}>Add Education Field</button>
      </fieldset>
    </>
  )
}

function EducationEntry({id, onChange, fieldType}) {
  return (
    <div>
      <FormField 
        name={EDUCATION_KEYS.SCHOOL_NAME}
        label="School Name" 
        type="text" 
        placeholder="Harvard University" 
        onChange={onChange} 
        entryId={id}
        fieldType={fieldType} 
      />

      <FormField 
        name={EDUCATION_KEYS.DEGREE} 
        label="Degree / Certificate" 
        type="text" 
        placeholder="B.Sc. Computer Science" 
        onChange={onChange}
        entryId={id}
        fieldType={fieldType} 
      />
      
      <FormField 
        name={EDUCATION_KEYS.DATE_RANGE} 
        label="Study Period" 
        type="text" 
        placeholder="2020.09 - 2024.04"
        onChange={onChange}
        entryId={id}
        fieldType={fieldType}
      />
    </div>
  )
}