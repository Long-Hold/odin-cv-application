/**
 * Renders a labeled form control, either an `<input>` or `<textarea>` depending on `multiLine`.
 * Designed as a controlled field: `value` and `onChange` must be supplied by the parent
 * to keep the shared form/resume state in sync as the user types.
 *
 * @param {Object} props
 * @param {string} props.name - Used as both the `name` and `id` attribute, and linked to the label via `htmlFor`.
 * @param {string} props.label - Text displayed in the associated `<label>`.
 * @param {string} [props.type] - Input type (e.g., "text", "email"). Ignored when `multiLine` is true, since `<textarea>` has no `type` attribute.
 * @param {string} [props.placeholder] - Placeholder text shown when the field is empty.
 * @param {string} [props.autoCompleteType] - Value passed to the `autoComplete` attribute. Only applied to `<input>`, not `<textarea>`.
 * @param {string} props.value - Current field value (controlled component).
 * @param {function} props.onChange - Change handler, called on every keystroke.
 * @param {boolean} [props.multiLine=false] - When true, renders a `<textarea>` instead of an `<input>`.
 * @returns {JSX.Element} A fragment containing a `<label>` and its corresponding `<input>` or `<textarea>`.
 */
export function FormField({
  name, label, type, placeholder, autoCompleteType, value, onChange, multiLine = false
}) {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        {multiLine ? (
          <textarea
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            autoComplete={autoCompleteType}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </>
  )
}