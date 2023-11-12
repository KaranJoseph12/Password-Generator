import React from 'react'
import { useState,useCallback,useEffect,useRef } from 'react'


const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState("Copy");



  return (
    <div className='w-full max-w-md bg-gray-700 text-lime-400 my-12 px-3 py-1 mx-auto rounded-lg font-[Rubik]'>
      <h1 className='text-center pb-4 text-2xl font-semibold py-2'>Password Generator</h1>
      <div className='flex overflow-hidden rounded-lg mb-4 '>
        <input 
        type="text" 
        id='input-text'
        value={password}
        className='w-full px-3 py-1'
        placeholder='Password'
        readOnly
        />
        <button className='px-2 text-white bg-lime-500 hover:bg-lime-400 active:bg-lime-600'>{btn}</button>
      </div>

    </div>
  )
}

export default App