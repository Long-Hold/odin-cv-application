export function AddEntryButton({ addField, fieldKey, text }) {
  return (
    <button
      type="button"
      className="addEntryBtn"
      onClick={() => addField(fieldKey)}
    >
      {text}
    </button>
  );
}
