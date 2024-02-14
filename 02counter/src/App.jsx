import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 15;
  const addvalue = () => {
    console.log("value added",Math.random());
    counter = counter+1;
  }

  return (
    
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
