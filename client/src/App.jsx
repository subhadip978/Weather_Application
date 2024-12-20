import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'


function App() {


  return (
    <div className='bg-dark-4'>
    <BrowserRouter>
    <Routes>
    
      <Route path="/"  element={<Home/>}/>



    
    </Routes>




    </BrowserRouter>

  
    </div>
  )
}

export default App
