import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setCount] = useState(0);
  function buttonIncrease() {
   setCount(count + 1);
  }
  function buttonDecrease() {
    if (count > 1) {
      setCount(count - 1)
    }    
   }
  function buttonDoubleIncrease() {
   setCount(count + 2);
  }
  function buttonDoubleDecrease() {
    if (count > 1) {
      setCount(count - 2)
    }    
   }
   function customeIncrease() {
    setCount(count + "customInput")
   }
   function buttonReset() {
    setCount(0);
   }
  return (
    <div>
      <h1 style={{color:"lightblue", fontSize: 30}}>Sheep count: {count}</h1>
      <button onClick={buttonIncrease}>+1</button> 
      <hr></hr>
      <button onClick={buttonDecrease}>-1</button>
      <hr></hr>
      <button onClick={buttonDoubleIncrease}>+2</button> 
      <hr></hr>
      <button onClick={buttonDoubleDecrease}>-2</button>
      <hr></hr>
      <label>Increase by: <input name="customInput" /></label>
      <button onClick={buttonReset}>Reset</button>
      <br>
      </br>
      <p><strong>This</strong> is the bigButton's <em>paragraph</em></p>
    </div>
  )
}


