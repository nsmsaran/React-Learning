import React, { createContext, useState } from 'react'
import Sample from './Sample'
export const myContext = createContext()
const ChallengeOnUsecontext = () => {
    const [name, setName] = useState("SAM")
  return (
    <myContext.Provider value={{name,setName}}>
    <h1>WELCOME FROM COMPONENT 1</h1>
    <h2>I AM {name}</h2>
    <Sample />
    </myContext.Provider>
  )
}

export default ChallengeOnUsecontext
