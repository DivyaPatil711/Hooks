import React from 'react'
import { useRef,useState } from 'react';

export default function Ref() {
    
const luckyName= useRef(null);
const [show, setShow] = useState(false);
const submitForm = (e) => {
    e.preventDefault();
const name = luckyName.current.value;
name=== "" ? alert("please fill the data"): setShow(true);
}
return (
<div>
<form action="" onSubmit={submitForm}>
<div>
<label htmlFor="luckyName">Enter your luckyName: </label>
<input type="text" id="luckyName" ref={ luckyName} />
</div>
<br/>
<button style={{backgroundColor:"Red"}}>Submit</button>
</form>
<p> { show? `your lucky name is ${luckyName.current.value}` : ""} </p>
  </div>
  )
}
