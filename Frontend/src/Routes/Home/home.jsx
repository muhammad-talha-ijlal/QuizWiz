import React from "react";
import { MainContainer } from "./home-style";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/auth");
  };
  return (
    <>
      <MainContainer>Welcome to QuizWiz</MainContainer>
      <form onSubmit={handleSubmit}>
        <Button button={"default"} type={"submit"}>
          Authentication
        </Button>
      </form>
    </>
  );
}
