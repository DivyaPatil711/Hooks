import { createContext} from "react"
import React from 'react'
import ComA from "./ComA"
const FirstName=createContext();
const LastName=createContext();
export default function UseContext() {
   
  return (
    <>
    <FirstName.Provider value={"Divya"}>
        <LastName.Provider value={"Patil"}>
            <ComA/>
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}
export { FirstName, LastName };
