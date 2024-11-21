import React, { useReducer } from 'react'
const calculations=(state,action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count + 1 }
        case "decrement":
            return {count:state.count - 1 }   
        case "reset":
            return {count: 0 }
        default:
            return state;         
    }
}
const ChallengeOnUsereducer = () => {
    const [state,dispatch] = useReducer(calculations,{count:0})
function increment(){
    dispatch ({type:"increment"})
}
function decrement(){
    dispatch ({type:"decrement"})
}
function reset(){
    dispatch ({type:"reset"})
}
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <button style={{backgroundColor:"lightpink"}} onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button style={{backgroundColor:"lightblue"}} onClick={decrement}>-</button>
      <button style={{backgroundColor:"lightgreen"}} onClick={reset}>RESET</button>

    </div>
  )
}

export default ChallengeOnUsereducer
