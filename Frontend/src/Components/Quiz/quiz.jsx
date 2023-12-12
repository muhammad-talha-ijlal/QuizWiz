import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import QuizModal from "./quizModal";
import axios from "axios";

function Quiz() {
  const Quiz = {
    _id: "",
    quizName: "New Quiz",
    teacherId: localStorage.getItem("userId"),
    classId: "",
    questions: [],
    marks: 10,
    totalMarks: 10,
    quizCode: 2134,
    // current date
    quizDate: Date().toLocaleString(),
    quizTime: Date().toLocaleString(),
    quizDuration: 10,
    quizStatus: "active",
    quizType: "objective",
    quizDescription: "New Quiz",
    quizInstructions: "New Quiz",
    answerKey: [],
  };
  const [quizUpdate, setQuizUpdate] = useState({});
  const [quiz, setQuizes] = useState([]);

  const [quizModalShow, setQuizModalShow] = useState(false);
  useEffect(() => {
    getAllQuizes();
  }, [quizModalShow]);
  const getAllQuizes = async () => {
    const response = await axios.get("http://localhost:3005/api/quiz/");
    const data = response.data;
    //console.log(data);
    setQuizes(data);
  };
  const handleClickDelete = async (e, newQuiz) => {
    e.preventDefault();
    console.log(newQuiz);
    const response = await axios.delete(
      `http://localhost:3005/api/quiz/${newQuiz._id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast.success("Quiz deleted successfully");
      getAllQuizes();
    }
  };
  const handleClickCreate = async (e, newQuiz) => {
    //setQuizUpdate(Quiz);

    e.preventDefault();

    if (newQuiz === "new") {
      const response = await axios.post(
        "http://localhost:3005/api/quiz/",
        Quiz,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      // console.log(data);
      setQuizUpdate(data);
      setQuizModalShow(true);
    } else {
      setQuizUpdate(newQuiz);
      setQuizModalShow(true);
    }
  };

  return (
    <div className="row newBriefMain mt-4 rounded">
      <div className="col-md-12">
        <div className="card py-2">
          <div
            className="card-header newBriefHeader"
            style={{ flex: 1, display: "flex", alignItems: "center" }}
          >
            <div className="createBriefIconDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <div>
              <h5 className="card-title">All Quizes</h5>
              <p className="card-text">Select the Quiz you are briefing for</p>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* brand profile new */}

      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "auto", overflow: "auto" }}
      >
        <div
          className="card border-2 border-light pb-3"
          style={{ width: "50vh", maxHeight: "30vh" }}
        >
          <div className="card-body text-center">
            <div className="rounded w-10 h-100 d-flex align-items-center justify-content-center">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/00000/plus.png"
                alt="plus"
                className="createIcon"
                onClick={(e) => handleClickCreate(e, "new")}
              />{" "}
            </div>
            <div className="text-small">Create Quiz</div>
          </div>
        </div>
        {quiz.map((newQuiz) => (
          <div
            className="card border-2 border-light pb-3"
            style={{ width: "50vh", maxHeight: "30vh" }}
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/00000/cancel.png"
              alt="plus"
              className="createIcon"
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={(e) => handleClickDelete(e, newQuiz)}
            />

            <div className="card-body text-center">
              <div className="rounded w-10 h-100 d-flex align-items-center justify-content-center">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/00000/plus.png"
                  alt="plus"
                  className="createIcon"
                  onClick={(e) => handleClickCreate(e, newQuiz)}
                />{" "}
              </div>
              <div className="text-small">{newQuiz.quizName}</div>
            </div>
          </div>
        ))}
      </div>

      {quizModalShow && (
        <QuizModal
          show={quizModalShow}
          // eslint-disable-next-line no-undef
          quiz={quizUpdate}
          onHide={() => setQuizModalShow(false)}
        />
      )}
    </div>
  );
}

export default Quiz;
