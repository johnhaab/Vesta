import React from "react";

import "./Body.scss";
import { BsFillPlayFill } from "react-icons/bs";

const Body = ({ info }) => {
  return (
    <div className="title">
      <div className="left-side-title">
        <h1 className="header" style={{ fontSize: "3rem" }}>
          {info.word}
        </h1>
        <p
          className="phonetic"
          style={{ color: "#e7868e", fontSize: "1.5rem" }}
        >
          {info.phonetic}
        </p>
      </div>
      <div className="play">
        <BsFillPlayFill className="play-btn" />
      </div>
    </div>
  );
};

export default Body;
