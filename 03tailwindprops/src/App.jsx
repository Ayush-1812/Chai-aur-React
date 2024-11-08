import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/card'
function App() {
  const [count, setCount] = useState(0)
   let myObj={
    username:"Ayush",
    age:19
   }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test </h1>
    <Card username="Classic Utility blazer" btntext="click me"/>
    <Card username="Men's blazer" btntext="visit me" />
    <Card username="Blazer"  />
    </>
  )
}

export default App
