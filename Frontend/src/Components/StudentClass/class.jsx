import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import ClassModal from "./classQuiz";
import axios from "axios";

function Class() {
  const navigate = useNavigate();
  const Class = {
    _id: "",
    className: "New Class",
    studentId: localStorage.getItem("userId"),
  };
  const [classUpdate, setClassUpdate] = useState({});
  const [classes, setClasses] = useState([]);

  const [classModalShow, setClassModalShow] = useState(false);
  useEffect(() => {
    getAllClasses();
  }, [classUpdate]);
  const getAllClasses = async () => {
    const response = await axios.get("http://localhost:3005/api/classes/");
    const data = response.data;
    //console.log(data);
    setClasses(data);
  };
  const handleClickDelete = async (e, newClass) => {
    e.preventDefault();
    console.log(newClass);
    const response = await axios.delete(
      `http://localhost:3005/api/classes/${newClass._id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      toast.success("Class deleted successfully");
      getAllClasses();
    }
  };
  const handleClickCreate = async (e, newClass) => {
    //setClassUpdate(Class);

    e.preventDefault();
    //console.log(newClass);
    navigate(`/student/${newClass._id}`, { state: { data: newClass } });
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
              <h5 className="card-title">All Classes</h5>
              <p className="card-text">Select the Class you are briefing for</p>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* brand profile new */}

      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "auto", overflow: "auto" }}
      >
        {classes.map((newClass) => (
          <div
            className="card border-2 border-light pb-3"
            style={{ width: "50vh", maxHeight: "30vh" }}
          >
            {/* <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/00000/cancel.png"
              alt="plus"
              className="createIcon"
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={(e) => handleClickDelete(e, newClass)}
            /> */}

            <div className="card-body text-center">
              <div className="rounded w-10 h-100 d-flex align-items-center justify-content-center">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/00000/plus.png"
                  alt="plus"
                  className="createIcon"
                  onClick={(e) => handleClickCreate(e, newClass)}
                />{" "}
              </div>
              <div className="text-small">{newClass.className}</div>
            </div>
          </div>
        ))}
      </div>

      {classModalShow && (
        <ClassModal
          show={classModalShow}
          // eslint-disable-next-line no-undef
          class={classUpdate}
          onHide={() => setClassModalShow(false)}
        />
      )}
    </div>
  );
}

export default Class;
