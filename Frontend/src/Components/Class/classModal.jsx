import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";

function ClassModal(props) {
  const [className, setClassName] = useState(props);

  const [specialChar, setSpecialChar] = useState(false);
  const [notValidString, setNotValidString] = useState(false);
  const [load, setLoad] = useState(false);

  const submitForm = (e) => {};

  const checkCharacters = (temp) => {};
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Class
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={submitForm}>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="form-control mt-2 mb-2"
              placeholder="First Name"
              value={className}
              onChange={(e) => {
                setClassName(e.target.value);
              }}
            />

            {/* <label htmlFor="">quiz</label>
            <select
              className="form-control mt-2 mb-2"
              value={quizDropdown}
              onChange={(e) => {
                setQuizDropdown(e.target.value);
              }}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select> */}
            {specialChar && (
              <small className="text-danger">
                Name should not inlcude special characters.
              </small>
            )}
            {notValidString && (
              <small className="text-danger">
                String must include value and less than 20 characters.
              </small>
            )}
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
                  {"Update"}
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
