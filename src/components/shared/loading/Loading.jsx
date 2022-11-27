import React from "react";

// Gif
import spinner from "../../../assets/loading/Spinner.gif";
const Loading = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loading;
