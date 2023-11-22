import { FormInputLabelStyle, Input, GroupStyle } from "./formInput-style.jsx";
export default function FormInput({ label, ...otherProps }) {
  //console.log(otherProps.value.length);
  return (
    <GroupStyle>
      <Input {...otherProps} />
      {label && <FormInputLabelStyle shrink={0}>{label}</FormInputLabelStyle>}
    </GroupStyle>
  );
}
