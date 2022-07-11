import {Document, Page} from 'react-pdf';

import samplePDF from './sample.pdf'


export default function Test() {
    return (
        <Document file={samplePDF}>
            <Page pageNumber={1}/>
        </Document>
    );
}



