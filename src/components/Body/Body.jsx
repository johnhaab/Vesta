import React from "react";

import "./Body.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const Body = ({ info }) => {
  const capitalizeFirstLetter = (string) => {
    string = "" + info.word;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const playSound = (url) => {
    if (info.phonetics.length > 1 && info.phonetics[1]) {
      var a = new Audio(url);
      a.play();
    } else {
      alert("Sorry, no sound available for this word.");
    }
  };

  return (
    <div className="container-body">
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
        <div
          className="play"
          onClick={() => playSound(info.phonetics[1].audio)}
        >
          <BsFillPlayFill className="play-btn" />
        </div>
      </div>
      <div className="noun">
        <p>noun</p>
        <div className="line"></div>
      </div>
      <div className="meanings">
        <p className="meanings-title">Meaning(s):</p>
        {info.meanings[0] &&
          info.meanings[0].definitions &&
          info.meanings[0].definitions.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: [-20, 0] }}
                transition={{
                  delay: 0,
                  default: { ease: "linear" },
                }}
              >
                <ul>
                  {info.meanings[0].definitions.map((definition, index) => {
                    return <li key={index}>{definition.definition}</li>;
                  })}
                </ul>
              </motion.div>
            </div>
          )}
      </div>
      {info.meanings[1] &&
        info.meanings[1].definitions &&
        info.meanings[1].definitions.length > 0 && (
          <div>
            <div className="verb">
              <p>verb</p>
              <div className="line"></div>
            </div>
            <div className="meanings">
              <p className="meanings-title">Meaning(s):</p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ x: [-20, 0] }}
                transition={{
                  delay: 0.1,
                  default: { ease: "linear" },
                }}
              >
                <ul>
                  {info.meanings[1].definitions.map((definition, index) => {
                    return <li key={index}>{definition.definition}</li>;
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        )}
      <div className="source">
        <div className="line-source"></div>
        <div className="wrapper-source">
          <p>Source: </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ x: [-20, 0] }}
            transition={{
              delay: 0.1,
              default: { ease: "linear" },
            }}
          >
            <a href={info.sourceUrls[0]} className="wrapper-source-2">
              {`${info.sourceUrls[0]}`}
              <BiLinkExternal className="link-icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Body;
