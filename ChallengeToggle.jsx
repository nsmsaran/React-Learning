import React, { useState } from "react";

const ChallengeToggle = () => {
  const [toggle, setToggle] = useState(true);
  function themeStyles() {
    return {
      backgroundColor: toggle ? "#D9A8FF" : "#FFCCBC",
      height: "60vh",
      width: "100vw",
      transition: "background-color 0.7s ease",
    };
  }
  return (
    <>
      <button
        onClick={() => setToggle((preToggle) => !preToggle)}
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          padding: " 15px 35px",
          marginLeft: "46%",
          marginTop: "0%",
          marginBottom: "5%",
          border: "none",
          color: "whitesmoke",
        }}
      >
        Toggle
      </button>
      <div style={themeStyles()}></div>
    </>
  );
};

export default ChallengeToggle;
