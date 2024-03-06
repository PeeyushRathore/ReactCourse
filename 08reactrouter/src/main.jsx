import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import Contact from './Component/Contactc/Contact.jsx'
import User from './Component/User/User.jsx'
import Github, { githubInfoLoader } from './Component/Github/Github.jsx'


// const router= createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout />,
//     children : [
//       {
//         path: "",
//         element: <Home />

//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = "/" element={<Layout />}>
    <Route path = '' element = {<Home />}/>
    <Route path = 'about' element = {<About />}/>
    <Route path = 'contact' element = {<Contact />}/>
    <Route path = 'user/:userid' element = {<User />}/>
    <Route 
    loader={githubInfoLoader}
    path = 'github' 
    element = {<Github />}/>

  </Route>
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
   
  </React.StrictMode>,
)
