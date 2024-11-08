import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 
// const reactElement={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me to Visit google'
// }
const anotherElement=(
  <a href="https://google.com" target='_blank'> Visit google </a>
)
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target: '_blank' },
  'click me to visit google'
);
createRoot(document.getElementById('root')).render(
 reactElement
)
