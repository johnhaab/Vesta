import React from "react";

import "./Body.scss";
import { BsFillPlayFill } from "react-icons/bs";

const Body = ({ info }) => {
  const capitalizeFirstLetter = (string) => {
    string = "" + info.word;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container">
      <div className="title">
        <div className="left-side-title">
          <h1 className="header" style={{ fontSize: "3rem" }}>
            {capitalizeFirstLetter(info.word)}
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
      <div className="noun">
        <p>noun</p>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Body;
