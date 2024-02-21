import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const [password, setPassword] = useState("")

  //useref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "012345678"
    if(characterAllowed) str += "!@#$%^&*?_+(){}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length, numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClickBoard = useCallback(() => 
  {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=> {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb'>
        <input
        type='text'
        value={password}
        className='outline-none w-full px-1 py-3'
        placeholder='Password'
        readOnly
        ref = {passwordref}
        ></input>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClickBoard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}}></input>
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharacterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
