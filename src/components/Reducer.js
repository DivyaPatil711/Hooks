import React, { useState,useReducer} from 'react'
const initialState = 0;
const reducer = (state, action) => {
if(action.type=== "Increment"){
    return state+1;

}
else{
    return state-1;

}
return state;

}
export default function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (  
        <>
        <div className='position-absolute top-50 start-50 translate-middle'>
        <p>{state}</p>
        <div>
            <button onClick={()=>dispatch({type: "Increment"})} style={{backgroundColor:"Red"}}> Increment </button>
            <button onClick={()=>dispatch({type: "Decrement"})} style={{backgroundColor:"Green"}}> Decrement </button>
        </div>

        </div>
           
        </>  
  )
};