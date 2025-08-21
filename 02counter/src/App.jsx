
import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 15;
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter+1;
    if( counter > 20 ) {
      counter = 20;
      alert("Can't exid the 20");
      return;
    }
    console.log("Clicked",counter);
    setCounter(counter);
    // console.log("Value added", Math.random());
  }

  const removeValue = () => {
    counter = counter-1;
    if( counter < 0 ) {
      counter = 0;
      alert("Can't go below 0 ");
      return;
    }
    console.log("Clicked",counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button 
      onClick={addValue}
      >Add value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
