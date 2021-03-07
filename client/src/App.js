import React from 'react'
import "./App.css"
import Search from "./Components/Search";
const App = () => {
  return (
      <div className="holder">
        <div className="main-div">
          <h2 className="main-heading">Search Your<br></br> Favourite Movies</h2>
          <Search />
        </div>
      </div>
  )
}

export default App