import React, { useEffect, useState } from "react";

const ChallengeOnUsecallbackList = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems(10));
  }, [getItems]);
  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default ChallengeOnUsecallbackList;
