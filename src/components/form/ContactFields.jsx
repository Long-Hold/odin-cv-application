import { FormField } from "./FormField";

const contactFieldsConfig = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Smith",
    autoCompleteType: "name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "email@example.com",
    autoCompleteType: "email",
  },
  {
    name: "number",
    label: "Phone Number",
    type: "tel",
    placeholder: "+0 123 456 7890",
    autoCompleteType: "tel",
  }
]

export function ContactFields({onChange, resumeData}) {
  return (
    <fieldset>
      <legend>Contact Details</legend>
      {contactFieldsConfig.map(field => <FormField key={field.name} value={resumeData[field.name]} onChange={onChange} {...field}/>)}
    </fieldset>
  )
}
