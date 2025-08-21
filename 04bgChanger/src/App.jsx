// import './index.css'
import { useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("#123456")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
          <button
          onPointerEnter={() => setColor("red")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>

          <button 
          onPointerEnter={() => setColor("blue")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>

          <button 
          onPointerEnter={() => setColor("green")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>

          <button 
          onPointerEnter={() => setColor("olive")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}}>Olive</button>

          <button 
          onPointerEnter={() => setColor("gray")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"gray"}}>Gray</button>

          <button 
          onPointerEnter={() => setColor("yellow")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}}>Yellow</button>

          <button 
          onPointerEnter={() => setColor("pink")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"pink"}}>Pink</button>

          <button 
          onPointerEnter={() => setColor("purple")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>Purple</button>

          <button 
          onPointerEnter={() => setColor("lavender")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}}>Lavender</button>

          <button 
          onPointerEnter={() => setColor("white")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}>White</button>

          <button 
          onPointerEnter={() => setColor("black")}
          onPointerOut={() => setColor("#123456")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
