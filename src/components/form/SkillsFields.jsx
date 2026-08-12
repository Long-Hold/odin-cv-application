import { FormField } from "./FormField";
import { RESUME_KEYS, SKILLS_KEYS } from "../../constants/resumeKeys";
import { RemoveEntryButton } from "./RemoveEntryButton";

export function SkillsFields({onChange, resumeData, addField, removeEntry}) {
  return (
    <>
      <fieldset className="skillsFields">
        <legend>Skills</legend>
        <ul>
          {resumeData.map(entry => <SkillEntry key={entry.id} entry={entry} onChange={onChange} removeEntry={removeEntry} /> )}
        </ul>
        <button type="button" onClick={() => addField(RESUME_KEYS.SKILLS)}>Add Skill</button>
      </fieldset>
    </>
  )
}

function SkillEntry({entry, onChange, removeEntry}) {
  return (
    <li>
      <FormField 
        name={SKILLS_KEYS.SKILL}
        label="Skill"
        type="text"
        placeholder="Javascript"
        value={entry[SKILLS_KEYS.SKILL]}
        onChange={(event) => onChange(RESUME_KEYS.SKILLS, entry.id, SKILLS_KEYS.SKILL, event.currentTarget.value)}
        entryId={entry.id}
      />
      
      <RemoveEntryButton 
        fieldType={RESUME_KEYS.SKILLS}
        entryId={entry.id}
        removeEntry={removeEntry}
        label={`Remove ${entry[SKILLS_KEYS.SKILL] || "skill"} entry`}
      />
    </li>
  )
}