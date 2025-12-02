import WindowContrrols from "#components/WindowContrrols";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div id="window-header">
        <WindowContrrols target={"resume"} />
        <h2>Resume.pdf</h2>

        <a
          href={"/files/KerolosNessim-FrontendDeveloper.pdf"}
          download
          className="cursor-pointer "
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div className="h-[90vh] overflow-y-auto macos-scrollbar">
        <Document
          file={"/files/KerolosNessim-FrontendDeveloper.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer
              renderAnnotationLayer
              className="mb-4"
            />
          ))}
        </Document>
      </div>

    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
