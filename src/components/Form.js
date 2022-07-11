import axios from 'axios';
import React, {useState} from 'react'
import data from "../data.json"

import SinglePagePDFViewer from "../components/pdfComponents/single-page";
import AllPagesPDFViewer from "../components/pdfComponents/all-pages";

import samplePDF from "../components/pdfComponents/sample.pdf";

function Form() {
    const [files, setFiles] = useState([])
    const [inputs, setInputs] = useState({
        data
    });
    console.log(inputs)

    const handleTitleInputChange = (event, name) => {
        setInputs({...inputs, [name]: event.target.value})
    }
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([...files, file]);
        const formData = new FormData();
        formData.append("newFile", file, file.title, file.intro);

        console.log(formData);
    }
// const f=files.length!==0?files[0].name:"hey"
//  console.log(f);


    const handleSubmit = () => {

        axios.post("http://localhost:4100/lessons", {inputs})
            .then((res) => {
                console.log(res)

            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <div>
            <h4>Single Page</h4>
            <SinglePagePDFViewer pdf={samplePDF}/>

            <hr/>

            <h4>All Pages</h4>
            <div className="all-page-container">
                <AllPagesPDFViewer pdf={samplePDF}/>
            </div>

            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    type="text"
                    value={inputs.title}
                    onChange={(event) => handleTitleInputChange(event, "title")}
                />

                <input
                    placeholder="Image Url"
                    type="text"
                    value={inputs.imgurl}
                    onChange={(event) => handleTitleInputChange(event, "imgurl")}
                />
                <input
                    placeholder="Intro"
                    type="text"
                    value={inputs.intro}
                    onChange={(event) => handleTitleInputChange(event, "intro")}
                />
                <input
                    placeholder="Summary"
                    type="file"
                    value={inputs.summary}
                    onChange={uploadHandler}
                />
                <input
                    placeholder="Content"
                    type="text"
                    value={inputs.content}
                    onChange={(event) => handleTitleInputChange(event, "content")}
                />
                <input
                    placeholder="URL"
                    type="text"
                    value={inputs.url}
                    onChange={(event) => handleTitleInputChange(event, "url")}
                />

                <input className="submit" type="submit" value="Submit"/>
            </form>

        </div>
    );
}

export default Form