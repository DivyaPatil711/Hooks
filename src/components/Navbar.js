import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Hooks</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/effect">UseEffect</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/UseState">UseState</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/UseContext">UseContext</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">UseCallback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Memo">UseMemo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Ref">UseRef</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Reducer">UseReducer</a>
        </li>
   </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
