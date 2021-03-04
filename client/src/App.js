import React from 'react'
import Recommendations from "./Components/Recommendations";
import "./App.css"
import Search from "./Components/Search";

 const App = () => {
  return (
    <div className = "main-div">
      <h2 className = "main-heading">Search Your<br></br> Favourite Movies</h2>
      <Search/>
    </div>
  )
}

export default App