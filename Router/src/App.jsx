import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <NavBar />
         <Routes>
          <Route path="/" elements={<Home/>} />
          <Route path="/about" elements={<About/>} />
          <Route path="/contact" elements={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
