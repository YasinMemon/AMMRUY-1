import { useState } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import ServicePage from './components/ServicePage'
import Main from './components/Main'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'
import Feedback from './components/Feedback'
import Fridge from './components/Fridge'
import RO from './components/RORepair'
import AC from './components/RORepair'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'


function App() {
  const {mode} = useSelector((state) => state.darkMode);
  
  return (
    <>
    <div style={{background: mode? 'black':'white' , color:mode? 'white':'black'}}>
      <Router >
        <Routes>
          <Route path='/auth' element={<Authentication/>}></Route>
          <Route path='/' element={<Main />}></Route>
          <Route path='/services' element={<ServicePage />}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App