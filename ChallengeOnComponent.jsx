import React from 'react'
function Child(props){
    return(
        <>
        <h1>{props.greet}</h1>
        </>
    )
}
function Parent() {
    const message = "Welcome from Parent!"
    return(
    <>
        <Child greet = {message}/>
    </>
    ) 
}
function ChallengeOnComponent(){
  return (
   <>
   <Parent />
   </>
  )
}

export default ChallengeOnComponent
