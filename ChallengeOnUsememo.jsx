import React, { useMemo, useState } from 'react'

const ChallengeOnUsememo = () => {
    const [letter,setLetter] = useState("asdflkjh")
    const letterLength = useMemo(() => {
        return letter.length
    },[letter])
  return (
    <>
      <h2>letter : {letter}</h2>
      <h4>The Length of the Letter is {letterLength} </h4>
      <button onClick={()=> setLetter(letter + "z")}>Add a Letter</button>
    </>
  )
}

export default ChallengeOnUsememo
