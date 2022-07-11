import React from "react";
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const { pdf } = props;

  return (
    <>
      <Document file={pdf} options={{ workerSrc: "pdf.worker.js" }}>
        <Page pageNumber={1} />
      </Document>
      <div></div>
    </>
  );
}
