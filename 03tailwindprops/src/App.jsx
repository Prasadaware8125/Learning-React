// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  let myObj = {
    name: "Prasad",
    age: 19
  };
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 
      rounded-xl'>Tailwind Test</h1>
      <Card myChannel = "hello" someObj={myObj}/>
      <Card myChannel= "aviraj"/>
    </>
  )
}

export default App
