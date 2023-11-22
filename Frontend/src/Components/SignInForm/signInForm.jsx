import { useState } from "react";
import { SignInContainer, ButtonsContainer } from "./signInForm-style.jsx";
import FormInput from "../FormInput/formInput";
import { buttonType } from "../Button/button";
import Button from "../Button/button";

export default function SignInForm() {
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label={"Email"}
          required
          name="email"
          type="email"
          // value={email}
          // onChange={handleChange}
        />
        <FormInput
          required
          label={"Password"}
          type="password"
          name="password"
          // value={password}
          // onChange={handleChange}
        />
        <ButtonsContainer>
          <Button button={"default"} type="submit">
            Sign In
          </Button>
          {/* <Button
            type="button"
            button={buttonType.googleSignIn}
            //onClick={logGoogleUserPopup}
          >
            Google Sign In
          </Button> */}
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}
