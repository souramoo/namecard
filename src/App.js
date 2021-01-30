import React, { useState, useEffect } from "react";
import "./App.css";
import Skeleton from "react-loading-skeleton";

export default function App() {
  const [text, setText] = useState([]);
  const metadata = ["Souradip Mookerjee", "MB/PhD Student", "face.jpg?s"];

  const img = new Image();
  img.onload = () => {
    setTimeout(() => setText(metadata), 1000);
  };
  img.src = metadata[2];

  useEffect(() => {
        var lockFunction =  window.screen.orientation.lock;
        try {
        if (lockFunction.call(window.screen.orientation, 'landscape')) {
                console.log('Orientation locked')
              } else {
                  console.error('There was a problem in locking the orientation')
        }
      } catch {}
  }, []);

  return (
    <div className="App">
      <div className="face" style={{ backgroundImage: "url(" + text[2] + ")" }}>
        {text[2] ? (
          ""
        ) : (
          <Skeleton circle={true} height={"100%"} width={"100%"} />
        )}
      </div>
      <div className="text">
        <h1>{text[0] || <Skeleton width={330} />}</h1>
        <span className="subtext">{text[1] || <Skeleton width={200} />}</span>
      </div>
    </div>
  );
}
