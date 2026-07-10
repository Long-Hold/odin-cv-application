import { FormField } from "./FormField";

export function EducationFields({onChange, resumeData, addField}) {
  return (
    <>
      <fieldset className="educationFields">
        <legend>Education</legend>
        {resumeData.map(entry => <EducationEntry key={entry.id} id={entry.id} onChange={onChange}/> )}
        <button type="button" data-field-type="education" onClick={addField}>Add Education Field</button>
      </fieldset>
    </>
  )
}

function EducationEntry({id, onChange}) {
  return (
    <div data-entry-id={id}>
      <FormField 
        name="schoolName" 
        label="School Name" 
        type="text" 
        placeholder="Harvard University" 
        onChange={onChange} 
        entryId={id} 
      />

      <FormField 
        name="degree" 
        label="Degree / Certificate" 
        type="text" 
        placeholder="B.Sc. Computer Science" 
        onChange={onChange}
        entryId={id} 
      />
      
      <FormField 
        name="dateRange" 
        label="Study Period" 
        type="text" 
        placeholder="2020.09 - 2024.04"
        onChange={onChange}
        entryId={id}
      />
    </div>
  )
}