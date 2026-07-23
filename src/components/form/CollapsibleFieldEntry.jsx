/**
 * Designed to be used with form components that have multiple related entries.
 * Using <details>, they can be collapsed to create space and reduce visual clutter.
 * 
 * This component encapsulates the entry in a fieldset with a hidden legend via a css accessibility class.
 * This is so screenreaders can still read the legend, but wont clutter the visual display
 */
export function CollapsibleFieldEntry({summaryText, legendText, entryComponent}) {
  return (
    <details>
      <summary>{summaryText}</summary>
      <fieldset>
        <legend className="visuallyHidden">{legendText}</legend>
        {entryComponent}
      </fieldset>
    </details>
  )
}