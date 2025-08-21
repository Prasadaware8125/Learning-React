// import { useState } from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // 1. useState
  // Create variable using useState to maintain the flow on changing of their values
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  // 2. useRef
  // To use copy button to copy the generated password to clip board
  const passwordRef = useRef(null)

  // Function to generate password
  // 3. useCallback
  // To used to optimise the code on every changes
  const passwordGenrator = useCallback(() => {
    let pass = ""
    // Attributes for generating password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if( numberAllowed ) str += "0123456789"

    if( charAllowed ) str += "!@#$%^&*()+-/[]{}`~"
    let i = 1
    while( i <= length ) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
      i++;
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  
  // Used to copy the password to clipboard
  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  },[password,length])

  // 4. useEffect
  // Used run multipletimes the passwordGenerator() function
  useEffect( () =>
    {passwordGenrator()},[length,numberAllowed,charAllowed,passwordGenrator]
  )

  return (
    <>
    {/* Main div */}
    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
      {/* heading */}
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      {/* box */}
      <div className='flex shadow mt-2
      rounded-lg overflow-hidden mb-4 bg-white'>
        {/* input box */}
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password' 
        readOnly
        // passing the reference of generated password for copying
        ref={passwordRef}
        />
        {/* button */}
        <button
        // to copy 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>

      {/* Attributes */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          {/* Range */}
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          // to set the length of password
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label >Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            // To check and uncheck the box 
            setNumberAllowed( (prev) => !prev);
          }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            // To check and uncheck the box
            setCharAllowed( (prev) => !prev);
          }}
           />
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

// exporting app function to import and use in main.jsx
export default App
