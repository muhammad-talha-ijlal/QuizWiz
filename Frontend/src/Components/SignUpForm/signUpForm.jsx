import { useState } from "react";
import { useDispatch } from "react-redux";
// import { signUpStart } from "../../Store/User/userAction";
import FormInput from "../FormInput/formInput";
import { SignUpContainer } from "./signUpForm-style.jsx";
import Button from "../Button/button";
export default function SignUpForm() {
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput
          label="Display Name"
          name="displayName"
          required
          type="text"
          // value={displayName}
          // onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          // value={email}
          // onChange={handleChange}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          // value={password}
          // onChange={handleChange}
        />
        <FormInput
          required
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          // value={confirmPassword}
          // onChange={handleChange}
        />
        <label htmlFor="">Role</label>
        <select
          name="role"
          // value={role}
          // onChange={handleChange}
          required
        >
          <option value="user">Teacher</option>
          <option value="admin">Student</option>
        </select>
        <Button button={"default"} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
}
