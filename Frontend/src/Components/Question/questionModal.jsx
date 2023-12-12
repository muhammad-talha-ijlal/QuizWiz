import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

function QuestionModal(props) {
  //console.log(props);

  const [questionName, setQuestionName] = useState(props.question.questionName);
  const [questionDescription, setQuestionDescription] = useState(
    props.question.questionDescription
  );
  const [option1, setOption1] = useState(props.question.option1);
  const [option2, setOption2] = useState(props.question.option2);
  const [option3, setOption3] = useState(props.question.option3);
  const [option4, setOption4] = useState(props.question.option4);
  const [answerKey, setAnswerKey] = useState(props.question.answerKey);

  const [specialChar, setSpecialChar] = useState(false);
  const [notValidString, setNotValidString] = useState(false);
  const [load, setLoad] = useState(false);
  useEffect(() => {}, []);

  const submitForm = async (e) => {
    //console.log(questionDate);
    e.preventDefault();
    let updatedQuestion = {
      questionName: questionName,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      questionDescription: questionDescription,
      answerKey: answerKey,
    };
    let updatedData = { ...props.question, ...updatedQuestion };
    //console.log(updatedData);
    const response = await axios.put(
      `http://localhost:3005/api/question/${props.question._id}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      //console.log(response.data);
      toast.success("Question updated successfully");
      props.onHide();
    }
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Question</Modal.Title>
      </Modal.Header>
      <form onSubmit={submitForm}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="">Question Name</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Name of the question"
              value={questionName}
              onChange={(e) => {
                setQuestionName(e.target.value);
              }}
            />
            <label htmlFor="">Question Description</label>
            <textarea
              className="form-control mt-2 mb-2"
              placeholder="Description of the question"
              value={questionDescription}
              onChange={(e) => {
                setQuestionDescription(e.target.value);
              }}
            />
            <label htmlFor="">Option 1</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Option 1"
              value={option1}
              onChange={(e) => {
                setOption1(e.target.value);
              }}
            />
            <label htmlFor="">Option 2</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Option 2"
              value={option2}
              onChange={(e) => {
                setOption2(e.target.value);
              }}
            />
            <label htmlFor="">Option 3</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Option 3"
              value={option3}
              onChange={(e) => {
                setOption3(e.target.value);
              }}
            />
            <label htmlFor="">Option 4</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Option 4"
              value={option4}
              onChange={(e) => {
                setOption4(e.target.value);
              }}
            />
            <label htmlFor="">Answer Key</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Answer Key"
              value={answerKey}
              onChange={(e) => {
                setAnswerKey(e.target.value);
              }}
            />
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

export default QuestionModal;
