import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./classQuiz-style.css"; // Import the CSS file for styling

function ClassQuiz(props) {
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  const class_ = location.state.data;
  const quizId = class_.quizId;
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const getQuiz = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/api/quiz/${quizId}`
      );
      if (response.status === 200) {
        setQuiz(response.data);
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const getQuestions = async () => {
    const q = quiz.questions;
    try {
      const response = await axios.post(
        `http://localhost:3005/api/question/getQuestionsByIds`,
        q
      );
      if (response.status === 200) {
        // Initialize selectedOptions with empty values
        const initialSelectedOptions = {};
        response.data.forEach((question) => {
          initialSelectedOptions[question._id] = null;
        });
        setSelectedOptions(initialSelectedOptions);
        setQuestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleOptionSelect = (questionId, selectedOption) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    // Logic to submit answers and calculate score
    const submittedAnswers = Object.values(selectedOptions);

    // Example: You can send the selected options to the server for scoring
    try {
      const response = await axios.post(
        "http://localhost:3005/api/quiz/checkAnswers",
        {
          quizId,
          answers: submittedAnswers,
          studentId: userId,
        }
      );
      console.log(response);
      if (response.status === 200) {
        // Display the result or handle it as needed
        toast.success(`Your score is: ${response.data.quizResult.marks}`);
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, [quizId]);

  useEffect(() => {
    getQuestions();
  }, [quiz]);

  return (
    <div className="quiz-container">
      <Button onClick={handleSubmit}>Submit</Button>
      {/* Render quiz questions and options here */}
      <div className="quiz-questions">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>
              {index + 1}) {question.questionName}
            </p>
            <ul>
              <li
                className={
                  selectedOptions[question._id] === question.option1
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  handleOptionSelect(question._id, question.option1)
                }
              >
                {question.option1}
              </li>{" "}
              <li
                className={
                  selectedOptions[question._id] === question.option2
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  handleOptionSelect(question._id, question.option2)
                }
              >
                {question.option2}
              </li>{" "}
              <li
                className={
                  selectedOptions[question._id] === question.option3
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  handleOptionSelect(question._id, question.option3)
                }
              >
                {question.option3}
              </li>{" "}
              <li
                className={
                  selectedOptions[question._id] === question.option4
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  handleOptionSelect(question._id, question.option4)
                }
              >
                {question.option4}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassQuiz;
