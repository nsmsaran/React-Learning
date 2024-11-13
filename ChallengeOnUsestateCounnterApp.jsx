import React, { useState } from "react";

const ChallengeOnUsestateCounnterApp = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number - 1)}>Decrease Count</button>
    </>
  );
};

export default ChallengeOnUsestateCounnterApp;
