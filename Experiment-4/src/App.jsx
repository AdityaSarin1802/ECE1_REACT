import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'

function App() {

  return (
    <>
    <h1 classname="h1">Student Information</h1>
    <Student  classname="student" name="John Doe" marks={60} major="computer science"/>
    <Student classname="student" name="Jane Smith" marks={72} major="mathematics"/>
    <Student classname="student" name="Bob Johnson" marks={61} major="physics"/>
    </>
  )
}

export default App
