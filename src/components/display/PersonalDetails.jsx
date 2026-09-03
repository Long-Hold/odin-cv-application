import { useRef } from "react";
import { useFitText } from "../../hooks/resizeTextFont";

export function PersonalDetails({name, email, number, summary}) {
  const nameRef = useRef(null);
  useFitText(nameRef, name, 22);

  return (
    <section className="personalDetails">
      <h1 ref={nameRef}>{name}</h1>
      <p>{email}</p>
      <p>{number}</p>
      <p className="multiLine">{summary}</p>
    </section>
  )
}