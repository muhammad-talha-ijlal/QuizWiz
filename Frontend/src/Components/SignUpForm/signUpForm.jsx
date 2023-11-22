import { useState } from "react";
// import { signUpStart } from "../../Store/User/userAction";
import axios from "axios";
import FormInput from "../FormInput/formInput";
import { SignUpContainer } from "./signUpForm-style.jsx";
import Button from "../Button/button";
export default function SignUpForm() {
  const user = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "teacher",
  };
  const [userCredentials, setUserCredentials] = useState(user);
  const { displayName, email, password, confirmPassword, role } =
    userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3005/api/users/",
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      // reset the form
      setUserCredentials(user);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="">Role</label>
        <select name="role" value={role} onChange={handleChange} required>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <Button button={"default"} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
}
