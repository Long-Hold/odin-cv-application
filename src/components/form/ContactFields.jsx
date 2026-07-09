import { FormField } from "./FormField";

const contactFieldsConfig = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Smith",
    autoCompleteType: "name",
  }
]

export function ContactFields({onChange, value}) {
  return (
    <fieldset>
      <legend>Contact Details</legend>
      {contactFieldsConfig.map(field => <FormField key={field.name} value={value} onChange={onChange} {...field}/>)}
    </fieldset>
  )
}
