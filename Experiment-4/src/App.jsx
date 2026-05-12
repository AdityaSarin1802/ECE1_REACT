import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './component/Student'
function App() {


  return (
    <>
      <h1 class="h1"  >Student Information card</h1>
    <Student  classname="student1" name="John Doe" marks={60} major="computer science"/>
    <Student classname="student1" name="Jane Smith" marks={72} major="mathematics"/>
    <Student classname="student1" name="Bob Johnson" marks={61} major="physics"/>
    </>
  )
}

export default App