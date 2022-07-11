import React from "react";
import "./FileUpload.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function FileUpload({ files, setFiles, removeFile, setVisible }) {

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    const formData = new FormData();
    formData.append("newFile", file, file.title, file.intro);
console.log(file)
    axios
      .post("http://localhost:4100/lessons", formData)
      .then((res) => {
       console.log(res)
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        removeFile(file.title);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input className="input" type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>
        <p className="main">Support Files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
}

export default FileUpload;
