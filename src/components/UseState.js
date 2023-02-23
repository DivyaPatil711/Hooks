import React,{useState} from 'react'


const UseState = () => {
    const[name,setName]=useState("Divya")
    const Name=()=>{
        setName("Dhruv")
    }
    const [firstname,setFirstName]=useState('')
const [lastname,setLastName]=useState('')
const [city,setCity]=useState('')
const [em,setEm]=useState('')
  return (
    <>
    <div className="container my-3">
    <h1>Enter Your Details</h1>
    <form>
  <div className="form-group">
    <label for="exampleFirstName">First Name</label>
    <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" id="FirstName" aria-describedby="emailHelp" placeholder="First Name" si/>
    
  </div>
  <div className="form-group">
    <label for="exampleLastName">Last Name</label>
    <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control" id="LastName" placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <label for="exampleLastName">City</label>
    <input type="text" className="form-control" id="City" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="exampleLastName">Email</label>
    <input type="email" className="form-control" id="Email" placeholder="Email" onChange={(e) => setEm(e.target.value)}/>
  </div>
</form>
<br/>
<h1>Enter Your Details</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">City</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{city}</td>
      <td>{em}</td>
    </tr>
   
  </tbody>
</table>
</div>
    </>
    
  )
}

export default UseState
