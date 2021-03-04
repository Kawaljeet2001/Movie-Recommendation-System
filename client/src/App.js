import React from 'react'
import "./App.css"
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import {Switch , Link} from 'react-router-dom';

 const App = () => {
  return (
    <div className = "holder">
      <div className = "main-div">
        <h2 className = "main-heading">Search Your<br></br> Favourite Movies</h2>
        <Search/>
        </div>
      <Footer/>
    </div>
  )
}

export default App