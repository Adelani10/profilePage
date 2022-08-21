import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import Info from './Info'
import About from './About'
import Interests from "./Interests"
import Footer from "./Footer"


function App() {
  return (
    <div className="container app mx-auto my-2 space-y-5 md:w-72 w-[90%] App bg-slate-900 rounded-lg">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App

