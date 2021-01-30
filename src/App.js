import React, { useState } from "react";
import "./styles.css";
import Skeleton from "react-loading-skeleton";

export default function App() {
  const [text, setText] = useState([]);

  setTimeout(() => {
    setText(["Souradip Mookerjee", "MB/PhD Student", "face.jpg"]);
  }, 2000);

  return (
    <div className="App">
      <div className="face" style={{ backgroundImage: "url(" + text[2] + ")" }}>
        {text[2] ? (
          ""
        ) : (
          <Skeleton circle={true} height={"30vh"} width={"30vh"} />
        )}
      </div>
      <div className="text">
        <h1>{text[0] || <Skeleton width={330} />}</h1>
        <span className="subtext">{text[1] || <Skeleton width={200} />}</span>
      </div>
    </div>
  );
}