import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
        <Home/>

      </div>
    },
    {
      path:"/pastes",
      element: 
      <div>
        <Navbar/>
        <Paste/>

      </div>
    },
  ]
);

function App() {


  return (
    <>
    <div>
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
