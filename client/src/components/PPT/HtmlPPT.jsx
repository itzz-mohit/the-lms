import React from "react";
import ppt from "../../assets/ppts/html.ppt";

const HtmlPPT = () => {
  return (
    <div>
      <h1>Learn Python</h1>
      <iframe
        title="Python Presentation"
        src={ppt}
        width="100%"
        height="600px"
        id="myId"
        className="myClassName"
        style={{ display: "initial", position: "relative" }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HtmlPPT;
