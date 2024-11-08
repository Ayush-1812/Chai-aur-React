import { useState } from 'react'
 import userContextprovider from './context/userContextprovider'
import './App.css'
//context api is associated with react only,redux ka kaam ye hai ki jho data indhar se udhar pass ho rha hai usse organised way me pass krna,react-Redux,redux-toolkit(RTk) for state management
function App() {
 

  return (
    <userContextprovider>
      <h1>React with Ayush</h1>
    </userContextprovider>
     
  )
}

export default App
