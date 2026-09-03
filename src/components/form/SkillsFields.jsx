import { FormField } from "./FormField";
import { RESUME_KEYS, SKILLS_KEYS } from "../../constants/resumeKeys";
import { RemoveEntryButton } from "./RemoveEntryButton";
import { AddEntryButton } from "./AddEntryButton";

export function SkillsFields({ onChange, resumeData, addField, removeEntry }) {
  return (
    <>
      <fieldset className="skillsFields">
        <legend>Skills</legend>
        <ul>
          {resumeData.map((entry) => (
            <SkillEntry
              key={entry.id}
              entry={entry}
              onChange={onChange}
              removeEntry={removeEntry}
            />
          ))}
        </ul>
        <AddEntryButton
          addField={addField}
          fieldKey={RESUME_KEYS.SKILLS}
          text={"Add Skill"}
        />
      </fieldset>
    </>
  );
}

function SkillEntry({ entry, onChange, removeEntry }) {
  return (
    <li>
      <FormField
        name={SKILLS_KEYS.SKILL}
        label="Skill"
        type="text"
        placeholder="Javascript"
        value={entry[SKILLS_KEYS.SKILL]}
        onChange={(event) =>
          onChange(
            RESUME_KEYS.SKILLS,
            entry.id,
            SKILLS_KEYS.SKILL,
            event.currentTarget.value,
          )
        }
        entryId={entry.id}
      />

      <RemoveEntryButton
        fieldType={RESUME_KEYS.SKILLS}
        entryId={entry.id}
        removeEntry={removeEntry}
        label={`Remove ${entry[SKILLS_KEYS.SKILL] || "skill"} entry`}
      />
    </li>
  );
}
