import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Results from './pages/Results';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router';
import Landing from './pages/Landing';

function App() {


  return (
    <>


    <Routes>
            <Route path="/" element={<Landing/>} />
      <Route path="/candidates" element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/result" element={<Results />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
        {/* You can add a 404 page for unmatched routes */}
        <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
    </Routes>

    </>
  )
}

export default App
