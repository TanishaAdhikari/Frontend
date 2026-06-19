import React, { useState } from 'react'

const LearnUseState = () => {
    let [name,setName]= useState("Tanisha");
    let [count, setCount] = useState(1);
  return (
    <div>
      <p>Name is {name}</p>
        <button onClick ={()=>{
            console.log("Button is clicked");
        }}>Send</button>

     <button onClick={()=>{
        setName("Sita");
    }}>Change Name</button>
    
    <p>count is {count}</p>
    <button onClick={()=>{
        setCount(count-1);
    }}>Decrement</button> 
    <button onClick={()=>{
        setCount(count+1);
    }}>Increment</button>
    </div>
  )
}

export default LearnUseState
