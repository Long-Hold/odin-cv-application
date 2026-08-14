import {Icon} from '@mdi/react';
import { mdiDelete } from '@mdi/js';

/**
 * Renders a button that removes a specific entry from a resume field array
 * (education, work experience, or skills), matched by entry id.
 *
 * The accessible name is fully controlled by the caller via `label`, since only
 * the calling field component knows which key (e.g. school name, company name,
 * skill) is relevant to describe the entry being removed.
 *
 * @param {Object} props
 * @param {string} props.fieldType - The resume field array this entry belongs to (e.g. RESUME_KEYS.EDUCATION).
 * @param {string} props.entryId - The id of the entry to remove, matched against entry.id.
 * @param {function} props.removeEntry - Handler called with (fieldType, entryId) to remove the entry.
 * @param {string} props.label - Accessible name for the button, e.g. "Remove Harvard University entry".
 * @returns {JSX.Element} A button that removes the matched entry when clicked.
 */
export function RemoveEntryButton({fieldType, entryId, removeEntry, label}) {
  return (
    <button 
      type="button" 
      className="removeEntryBtn" 
      aria-label={label}
      onClick={() => removeEntry(fieldType, entryId)}
    >
      <Icon path={mdiDelete} size={1} />
    </button>
  )
}