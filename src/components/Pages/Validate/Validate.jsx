import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Validate.css";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Validate = ({}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const changeHandler = (event) => {
    setShow(false);
    setSuccess(false);
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    let formData = new FormData();
    formData.append("file", selectedFile);
    fetch("http://127.0.0.1:5000/validate-diploma", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.is_valid) {
          setSuccess(true);
        }
        setShow(true);
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Sidebar />
      <div className="Validate">
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
        {show === true ? (
          <div>
            {success === true ? (
              <div>
                <AiFillCheckCircle color="green" size={25} />
              </div>
            ) : (
              <div>
                <AiFillCloseCircle color="red" size={25} />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Validate;
