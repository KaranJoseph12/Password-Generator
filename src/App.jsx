import React from 'react'
import { useState,useCallback,useEffect,useRef } from 'react'


const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState("Copy");

  const passwordRef = useRef(null)

  const copyText = useCallback(()=>{
      window.navigator.clipboard.writeText(password)
      setBtn("Copied")
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,40)
  },[password])


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*!@#$%&*"
    setBtn("Copy")
      

    for (let i = 0; i <= length; i++) {
      let char =  Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])



  return (
    <div className='w-full max-w-md bg-gray-700 text-lime-400 my-12 px-3 py-4 mx-auto rounded-lg font-[Rubik] '>
      <h1 className='text-center pb-4 text-2xl font-semibold py-2 mb-1'>Password Generator</h1>
      <div className='flex overflow-hidden rounded-lg mb-4 '>
        <input 
        type="text" 
        id='input-text'
        value={password}
        className='w-full px-3 py-1  outline-none bg-slate-500'
        placeholder='Password'
        ref={passwordRef}
        readOnly
        />
        <button onClick={copyText} className=' outline-none px-2 text-white bg-lime-500 hover:bg-lime-400 active:bg-lime-600'>{btn}</button>
      </div>
      <div className='flex gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           id='length'
           value={length}
           min={8}
           max={80}
           className='accent-lime-400 outline-none w-28'
           onChange={(e)=>{setLength(e.target.value)}}
            />
          <label className='pr-2' htmlFor="length">Length: ({length})</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          id='numbers'
          defaultChecked = {numberAllowed}
          onChange={() => {setNumberAllowed((prev) => !prev )}}
          className=' accent-lime-400 checked outline-none '
           />
           <label className='pr-2' htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {charAllowed}
          onChange={() => {setCharAllowed((prev) =>!prev)}}
          id='characters'
          className=' accent-lime-400 checked outline-none'
           />
           <label  htmlFor="characters">Characters</label>
        </div>
      </div>

    </div>
  )
}

export default App
