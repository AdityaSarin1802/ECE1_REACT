import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount]=useState(0);// 0 is the initial value of count
  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  const reset=()=>{
    setCount(0);
  };
  return (
    <>
    <div className='container'>
      <h1>React Counter Application</h1>
      <h2 className='counter'>{count}</h2>
      <div className='buttons'>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
    </div>
      <Counter />
    </>
  )
}

export default App
