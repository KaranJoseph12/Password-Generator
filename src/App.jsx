import { useCallback, useEffect, useRef, useState } from "react"

import React from 'react'

const App = () => {
  return (
    <div className="w-full max-w-md bg-gray-700 mx-auto rounded-lg px-3 my-12 py-1 text-orange-500">
      <h1 className="text-white text-xl text-center pb-2"> Password Generator</h1>
       <div className=" flex justify-center rounded-lg py-2 gap-1">
            <input type="text" 
            className=" outline-none rounded-lg w-full py-1 px-2" 
            placeholder="Password"
            readOnly
            />
            <button className="px-2 py-1 bg-orange-500 text-white rounded-lg outline-none">Copy</button>
       </div>
    </div>
  )
}

export default App