import React, { useState } from 'react';
import './App.css';

function App() {
  const [number,setNumber]=useState(0);

  const incrementNum=()=>setNumber(number+1);
  const decreamentNum=()=>{
    if(number>0){
       setNumber(number-1);
    }
  }
 

  return (
    <div className="App">
      <h1>React counter</h1>
      <div class='counterClass'>
        
        <h3>{number}</h3>
        <button onClick={incrementNum}>+1</button>
        <button onClick={decreamentNum}>-1</button>
      </div>
    </div>
  );
}

export default App;
