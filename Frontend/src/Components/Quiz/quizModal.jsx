import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

function QuizModal(props) {
  //console.log(props);

  const [quizName, setQuizName] = useState(props.quiz.quizName);
  const [marks, setMarks] = useState(props.quiz.marks);
  const [totalMarks, setTotalMarks] = useState(props.quiz.totalMarks);
  const [quizCode, setQuizCode] = useState(props.quiz.quizCode);
  const [quizDate, setQuizDate] = useState(props.quiz.quizDate);
  const [quizTime, setQuizTime] = useState(props.quiz.quizTime);
  const [quizDuration, setQuizDuration] = useState(props.quiz.quizDuration);
  const [quizStatus, setQuizStatus] = useState(props.quiz.quizStatus);
  const [quizType, setQuizType] = useState(props.quiz.quizType);
  const [quizDescription, setQuizDescription] = useState(
    props.quiz.quizDescription
  );
  const [quizInstructions, setQuizInstructions] = useState(
    props.quiz.quizInstructions
  );
  const [answerKey, setAnswerKey] = useState(props.quiz.answerKey);

  const [specialChar, setSpecialChar] = useState(false);
  const [notValidString, setNotValidString] = useState(false);
  const [load, setLoad] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const getAllQuestions = async () => {
    const response = await axios.get("http://localhost:3005/api/question/");
    const data = response.data;
    // data.forEach((question) => {
    //   availableQuestions.push({
    //     id: question._id,
    //     questionText: question.questionText,
    //   });
    // });
    setAvailableQuestions(data);
  };
  // State variable to store selected questions
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  useEffect(() => {
    getAllQuestions();
    //console.log(quizTime);
    const convertedTime = new Date(quizDate);
    // // Format time as HH:mm AM/PM
    // var hours = convertedTime.getHours();
    // var minutes = convertedTime.getMinutes();
    // var ampm = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12;
    // hours = hours ? hours : 12; // Handle midnight
    // var formattedTime =
    //   hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;
    // console.log(formattedTime);
    //setQuizTime(formattedTime);
    setQuizDate(convertedTime.toISOString().slice(0, 10));
    console.log(convertedTime.toISOString().slice(0, 10));
  }, []);

  const submitForm = async (e) => {
    console.log(selectedQuestions);

    //console.log(quizDate);
    e.preventDefault();
    let updatedQuiz = {
      quizName: quizName,
      // marks: marks,
      totalMarks: totalMarks,
      quizCode: quizCode,
      quizDate: quizDate,
      // quizTime: quizTime,
      questions: selectedQuestions,
      quizDuration: quizDuration,
      quizStatus: quizStatus,
      quizType: quizType,
      quizDescription: quizDescription,
      quizInstructions: quizInstructions,
      answerKey: answerKey,
    };
    let updatedData = { ...props.quiz, ...updatedQuiz };
    //console.log(updatedData);
    const response = await axios.put(
      `http://localhost:3005/api/quiz/${props.quiz._id}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      //console.log(response.data);
      toast.success("Quiz updated successfully");
      props.onHide();
    }
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Quiz</Modal.Title>
      </Modal.Header>
      <form onSubmit={submitForm}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="">Quiz Name</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Name of the quiz"
              value={quizName}
              onChange={(e) => {
                setQuizName(e.target.value);
              }}
            />
            {/* <label htmlFor="">Marks</label>
            <input
              type="number"
              className="form-control mt-2 mb-2"
              placeholder="Marks"
              value={marks}
              onChange={(e) => {
                setMarks(e.target.value);
              }}
            /> */}
            <label htmlFor="">Total Marks</label>
            <input
              type="number"
              className="form-control mt-2 mb-2"
              placeholder="Total Marks"
              value={totalMarks}
              onChange={(e) => {
                setTotalMarks(e.target.value);
              }}
            />
            <label htmlFor="">Quiz Code</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Code"
              value={quizCode}
              onChange={(e) => {
                setQuizCode(e.target.value);
              }}
            />
            <label htmlFor="">Quiz Date</label>
            <input
              type="date"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Date"
              value={quizDate}
              onChange={(e) => {
                setQuizDate(e.target.value);
              }}
            />
            {/* <label htmlFor="">Quiz Time</label>
            <input
              type="time"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Time"
              // convert quizTime in time format
              value={quizTime}
              onChange={(e) => {
                setQuizTime(e.target.value);
              }}
            /> */}
            <label htmlFor="">Quiz Duration</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Duration"
              value={quizDuration}
              onChange={(e) => {
                setQuizDuration(e.target.value);
              }}
            />
            <label htmlFor="">Quiz Status</label>
            <select
              className="form-control mt-2 mb-2"
              value={quizStatus}
              onChange={(e) => {
                setQuizStatus(e.target.value);
              }}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <label htmlFor="">Quiz Type</label>
            <select
              className="form-control mt-2 mb-2"
              value={quizType}
              onChange={(e) => {
                setQuizType(e.target.value);
              }}
            >
              <option value="true">Public</option>
              <option value="false">Private</option>
            </select>
            <label htmlFor="">Quiz Description</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Description"
              value={quizDescription}
              onChange={(e) => {
                setQuizDescription(e.target.value);
              }}
            />
            <label htmlFor="">Quiz Instructions</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Quiz Instructions"
              value={quizInstructions}
              onChange={(e) => {
                setQuizInstructions(e.target.value);
              }}
            />
            <div>
              <label htmlFor="selectedQuestions">Select Questions</label>
              <select
                multiple
                className="form-control mt-2 mb-2"
                id="selectedQuestions"
                value={selectedQuestions}
                onChange={(e) =>
                  setSelectedQuestions(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {availableQuestions.map((question) => (
                  <option key={question._id} value={question._id}>
                    {question.questionName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">
            Close
          </Button>
          {!specialChar && (
            <>
              {!notValidString && (
                <Button type="submit" disabled={load ? true : false}>
                  {"Save"}
                </Button>
              )}
            </>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default QuizModal;
