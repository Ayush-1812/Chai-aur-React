import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState hook is used to change the state not changing the values, iss change ko propogate kiya jaata hai aapke UI ke andar
  // useState se hume 2 cheeze milti hai array ke format me [variable(counter),function(setCounter)]

 let [counter,setCounter]=useState(5)
// let counter=5
const addValue= ()=>{
  //this is not a story of setCounter it is the story of useState , useState jhp hai wo jitne bhi updates bhejne hote hai UI me ya phir variables me wo bathces me bhejhta hai
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
 

  //in following command they are not bunch of packages to update , we are taking previous state
   setCounter((prevCounter)=>Math.min(prevCounter+1,20));
   setCounter((prevCounter)=>Math.min(prevCounter+1,20));
  // setCounter((prevCounter)=>Math.min(prevCounter+1,20));
  // setCounter((prevCounter)=>Math.min(prevCounter+1,20));

}
const removeValue=()=>{
 
  setCounter((prevCounter)=>Math.max(0,prevCounter-1));
}
  return (
    <>
       <h1>Chai Aur React</h1>
       <h2>counter value: {counter}</h2>
       <button
       onClick={addValue}
       >Add value : {counter}</button><br></br>
       <button
       onClick={removeValue}
       >Remove value: {counter}</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
