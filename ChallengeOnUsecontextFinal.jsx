import React, { useContext } from 'react'
import { myContext } from './ChallengeOnUsecontext'

const ChallengeOnUsecontextFinal = () => {
    const {name,setName} = useContext(myContext)
  return (
    <div>
        <h1>WELCOME FROM COMPONENT 3</h1>
      <button onClick={()=>setName( name === "SAM"?"SARAN":"SAM")}>CHANGE NAME</button>
    </div>
  )
}

export default ChallengeOnUsecontextFinal
