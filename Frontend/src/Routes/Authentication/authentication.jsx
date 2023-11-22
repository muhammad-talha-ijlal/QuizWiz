import SignUpForm from "../../Components/SignUpForm/signUpForm.jsx";
import SignInForm from "../../Components/SignInForm/signInForm.jsx";
import { AuthenticationContainer } from "./authentication-style.jsx";
export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
