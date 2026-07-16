import { FormField } from "./FormField";
import { RESUME_KEYS } from "../../constants/resumeKeys";

const contactFieldsConfig = [
  {
    name: RESUME_KEYS.NAME,
    label: "Full Name",
    type: "text",
    placeholder: "John Smith",
    autoCompleteType: "name",
  },
  {
    name: RESUME_KEYS.EMAIL,
    label: "Email Address",
    type: "email",
    placeholder: "email@example.com",
    autoCompleteType: "email",
  },
  {
    name: RESUME_KEYS.NUMBER,
    label: "Phone Number",
    type: "tel",
    placeholder: "+0 123 456 7890",
    autoCompleteType: "tel",
  },
  {
    name: RESUME_KEYS.SUMMARY,
    label: "Professional Summary",
    multiLine: true,
    placeholder: "Describe your unique talents and interests...."
  }
]

export function ContactFields({onChange, resumeData}) {
  return (
    <fieldset className="contactFields">
      <legend>Contact Details</legend>
      {
        contactFieldsConfig.map(field => 
          <FormField 
            key={field.name} 
            value={resumeData[field.name]} 
            onChange={(event) => onChange(field.name, event.currentTarget.value)} 
            {...field}
          />
        )
      }
    </fieldset>
  )
}
