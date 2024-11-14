import React, { useEffect, useState } from "react";

const ChallengeOnUsestateAndUseeffect = () => {
  const [burgerCount, setburgerCount] = useState(0);
  const [burgerPrice, setburgerPrice] = useState(0);

  useEffect(() => {
    setburgerPrice(burgerCount * 140);
  }, [burgerCount]);
  return (
    <>
      <h1>Burger Shop</h1>
      <h3>
        {burgerCount}*140 = {burgerPrice}
      </h3>
      <button onClick={() => setburgerCount(burgerCount + 1)}>
        Add One More
      </button>
      <button onClick={() => setburgerCount(burgerCount - 1)}>-</button>
    </>
  );
};

export default ChallengeOnUsestateAndUseeffect;
