import React from "react";
import pdfFile from "../../assets/pdfs/Html-Basics.pdf";
const Docs = () => {
  //const documentURL = { pdfFile };
  return (
    <div>
      <iframe src={pdfFile} width="100%" height="600px" />
    </div>
  );
};
export default Docs;
