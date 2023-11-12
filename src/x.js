import { useCallback, useEffect, useRef, useState } from "react"


const App = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [btn, setBtn] = useState("Copy");

    const passwordRef = useRef(null)

    const copyhandler = useCallback(()=>{
        window.navigator.clipboard.writeText(password)
        setBtn("Copied")
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,10); 
    },[password])

    const passwordGenerator = useCallback(()=>{

      let pass = "";``
      let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%&*?@#%&*"
      setBtn("Copy")
      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className="w-full max-w-md bg-gray-700 mx-auto rounded-lg px-3 my-12 py-1 text-orange-500">
      <h1 className="text-white text-xl text-center pb-2"> Password Generator</h1>
       <div className=" flex justify-center rounded-lg py-2 gap-1">
            <input type="text" 
            className=" outline-none rounded-lg w-full py-1 px-2" 
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
            />
            <button
             onClick={copyhandler}
             className="hover:bg-orange-600 active:bg-orange-700 
             px-2 py-1 bg-orange-500 text-white rounded-lg outline-none">{btn}</button>
       </div>
       <div className="flex gap-x-2 pt-1">
        <div className="flex gap-x-1 items-center ">
          <input
          id="length"
          type="range"
          min={8}
          max={80}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}} 
          className=" cursor-pointer"
          />
          <label htmlFor="length" className="pr-3">Length: ({length})</label>

            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="number"
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label htmlFor="number" className="pr-3">Number</label>

            <input
             type="checkbox"
             defaultChecked={charAllowed}
             id="character"
             onChange={()=>{setCharAllowed((prev)=>!prev)}}
             />
             <label htmlFor="character">Characters</label>
       </div>

       </div>
    </div>
  )
}

export default App