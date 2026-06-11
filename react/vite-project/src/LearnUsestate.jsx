import React,{useState} from 'react'

const LearnUsestate = () => {
  const [name, setName] = useState("mr shah")
  const[count, setCount] = useState(0)

  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={()=> {
        console.log("button clicked")
      }}>click me</button>
      <button onClick={()=> {
        setName(" Shah")
      }}>name change</button>
      <button onClick={()=> {
        setCount(count + 1)
        console.log(count + 1)
      }}>+</button>
      <button onClick={()=> {
        setCount(count - 1)
        console.log(count - 1)
      }}>-</button>
      
    </div>
  );
};

export default LearnUsestate
