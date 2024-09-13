import React, { useState } from 'react'
import './../styles/App.css';
const [name,setName]=useState("");
const App = () => {
  return (
    <div id='main'>
      {/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
      <label htmlFor="">Enter Your Name:</label><br />
      <input type="text" onChange={(e)=>{
        setName(e.target.value);
      }} /> <br />
      <p>{name}</p>
    </div>
  )
}

export default App
