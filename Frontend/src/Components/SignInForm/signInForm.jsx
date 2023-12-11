import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignInContainer, ButtonsContainer } from "./signInForm-style.jsx";
import FormInput from "../FormInput/formInput";
import { buttonType } from "../Button/button";
import Button from "../Button/button";

export default function SignInForm() {
  const navigate = useNavigate();
  const user = {
    // displayName: "",
    email: "",
    password: "",
    // confirmPassword: "",
    // role: "teacher",
  };
  const [userCredentials, setUserCredentials] = useState(user);
  const { displayName, email, password, confirmPassword, role } =
    userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting");
    console.log(userCredentials);
    try {
      const response = await axios.post(
        "http://localhost:3005/api//users/login",
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
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userid);
      }
      if (data.role === "teacher") {
        navigate("/teacher");
      }
      if (data.role === "student") {
        navigate("/student");
      }
      if (data.role === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
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
