import { FormInputLabelStyle, Input, GroupStyle } from "./formInput-style.jsx";
export default function FormInput({ label, ...otherProps }) {
  //console.log(otherProps);
  return (
    <GroupStyle>
      <Input {...otherProps} />
      {label && (
        <FormInputLabelStyle shrink={otherProps.value ? true : false}>
          {label}
        </FormInputLabelStyle>
      )}
    </GroupStyle>
  );
}
