import React, { useCallback, useState } from "react";
import ChallengeOnUsecallbackList from "./ChallengeOnUsecallbackList";

const ChallengeOnUsecallback = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (increment) => {
      return [
        num + increment + 1,
        num + increment + 2,
        num + increment + 3,
        num + increment + 4,
        num + increment + 5,
      ];
    },
    [num]
  );

  const theme = {
    backgroundColor: dark ? "green" : "lightgreen",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      /><br></br>
      <button onClick={()=> setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={theme}></div>
      <ChallengeOnUsecallbackList getItems={getItems}/>
    </>
  );
};

export default ChallengeOnUsecallback;
