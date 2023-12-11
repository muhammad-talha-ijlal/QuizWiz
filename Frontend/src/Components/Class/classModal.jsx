import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

function ClassModal(props) {
  console.log(props);
  const [className, setClassName] = useState(props.class.className);
  const [quizDropdown, setQuizDropdown] = useState(props.class.quizDropdown);
  const [specialChar, setSpecialChar] = useState(false);
  const [notValidString, setNotValidString] = useState(false);
  const [load, setLoad] = useState(false);

  const submitForm = async (e) => {
    //
    e.preventDefault();
    let updatedClass = {
      className: className,
      quizDropdown: quizDropdown,
    };
    let updatedData = { ...props.class, ...updatedClass };
    console.log(updatedData);
    const response = await axios.put(
      `http://localhost:3005/api/classes/${props.class._id}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast.success("Class updated successfully");
      props.onHide();
    }
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Class</Modal.Title>
      </Modal.Header>
      <form onSubmit={submitForm}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="">Class Name</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="Name of the class"
              value={className}
              onChange={(e) => {
                setClassName(e.target.value);
              }}
            />

            <label htmlFor="">Quiz</label>
            <select
              className="form-control mt-2 mb-2"
              value={quizDropdown}
              onChange={(e) => {
                setQuizDropdown(e.target.value);
              }}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
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

export default ClassModal;
