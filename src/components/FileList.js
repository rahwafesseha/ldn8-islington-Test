import axios from "axios";
import React from "react";
import FileItem from "./FileItem";

const FileList = ({ files, removeFile }) => {


    const deleteFileHandler=(_name)=>{
    axios
      .delete(`http://localhost:4100/lessons?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.log(err));
    }
  return (
    <ul className="file-list">
        {files && files.map((f) => < FileItem 
        key={f.title} file = {f} deleteFile = {deleteFileHandler}/>)}
    </ul>
  );
};

export default FileList;
