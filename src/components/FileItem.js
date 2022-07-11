import React from "react";
import {
  faFileAlt,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./FileItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FileItem = ({ file, deleteFile }) => {

  return (
    <li className="list-item" key={file.title}>
      <FontAwesomeIcon icon={faFileAlt} />
      <p>{file.title}</p>
      <p>{file.intro}</p>
      <div className="activities">
        {file.isUploading && (
          <FontAwesomeIcon icon={faSpinner} className="fa-spin " />
        )}
        {!file.isUploading && (
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-trash"
            onClick={() => deleteFile(file.title)}
          />
        )}
      </div>
    </li>
  );
};

export default FileItem;
