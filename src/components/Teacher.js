import { useState } from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";
import "./Teacher.css";
// import { emailjs } from "emailjs-com";
import { send } from "emailjs-com";



function Teacher() {
  const [files, setFiles] = useState([
    // title, imgurl, intro, summary, content, url, rating
      { id: 1, title: "myFile-1.pdf", intro: "present tense" },
      { id: 2, title: "myFile-2.pdf", intro: "past tense" },
      { id: 3, title: "myFile-3.pdf", intro: "future tense" },
      { id: 4, title: "myFile-4.pdf", intro: "prepositional sentence" },
  ]);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    textarea: "",
    submit: "",
  });

  const removeFile = (fileTitle) => {
    setFiles(files.filter((file) => file.title !== fileTitle));
  };

  const handleFullNameInputChange = (event) => {
    setValues({ ...values, fullName: event.target.value });
  };

 

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleTextAreaInputChange = (event) => {
    setValues({ ...values, textarea: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_6z7zn3y", "template_j3jl9q6", "wZnrT-T2pOxGNXIk5", values)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("failed");
      });
  };

  return (
    <div>
      <div>
        <h1>Our Expert Teachers</h1>
        <p className="lesson-plan">
          Here you can find a wide range of full lesson plans to use in your
          secondary classroom. All of our lessons are designed around themes
          engaging and relevant to secondary learners and can be used to
          complement your school curriculum, giving students an opportunity to
          develop their English language and skills in motivating and enjoyable
          ways. Written by young learner experts from around the world, our
          lesson plans are easy to use and aim to give your students the skills
          and confidence they need to enjoy learning English.
        </p>
      </div>
      <div className="add-content">
        <p onClick={() => setVisible(true)}>Add Content</p>
        <p type="submit" onClick={() => setVisible(false)}>
          Cancel
        </p>
      </div>
      {visible && (
        <>
          <FileUpload
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
            setVisible={setVisible}
          />
          <FileList files={files} removeFile={removeFile} />
        </>
      )}

      <h1 className="contact-us">Contact Us</h1>

      <form
        onSubmit={onSubmit}

        // onSubmit={handleSubmitInputChange}
      >
        <input
          placeholder="Full Name"
          type="text"
          value={values.fullName}
          onChange={handleFullNameInputChange}
        />

        <input
          placeholder="Email"
          type="text"
          value={values.email}
          onChange={handleEmailInputChange}
        />

        <textarea
          type="text"
          value={values.textarea}
          onChange={handleTextAreaInputChange}
        />

        <input className="submit" type="submit" value="Submit" />
      </form>
    

      
    </div>
  );
}

export default Teacher;
