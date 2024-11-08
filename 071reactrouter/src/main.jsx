import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './About/About.jsx'
import Contact from './contact/contact.jsx'
 import User from './components/User/User.jsx'
 import Github ,{githubInfoLoader} from './components/Github/Github.jsx'


//Self-Closing Tags:
//Used for elements that don’t have any children (content between the opening and closing tags).
//Normal Tags:
//Used for elements that do have children or other content nested within them.


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//       path:"about",
//       element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
