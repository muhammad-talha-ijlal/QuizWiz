import {
  baseButtonStyles,
  googleSignInStyles,
  invertedStyles,
  ButtonSpinner,
} from "./button-style.jsx";

export const buttonType = {
  googleSignIn: "googleSignIn",
  default: "default",
  inverted: "inverted",
};
const getButtonStyles = (button) =>
  ({
    [buttonType.googleSignIn]: googleSignInStyles,
    [buttonType.inverted]: invertedStyles,
    [buttonType.default]: baseButtonStyles,
  }[button]);

export default function Button({ children, button, isLoading, ...otherProps }) {
  const ButtonStyles = getButtonStyles(button);
  return (
    <ButtonStyles disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonStyles>
  );
}
