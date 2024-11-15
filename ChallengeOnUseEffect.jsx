import { useState, useRef } from "react";

function ChallengeOnUseEffect() {
  const [password, setPassword] = useState("");
  const countRef = useRef(0);
  const minLength = 8;

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    countRef.current += 1;
    if (password.length < minLength) {
      return `Password is too short. You need at least ${minLength} characters.`;
    } else if (password.length > minLength) {
      return `Password is too long. Maximum is ${minLength} characters.`;
    } else {
      return "Password length is correct!";
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <p>{validatePassword()}</p>
    </div>
  );
}

export default ChallengeOnUseEffect;
