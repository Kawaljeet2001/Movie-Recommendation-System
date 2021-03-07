import React from 'react'
import "./App.css"
import Search from "./Components/Search";
import bgvideo from "./bg_video.m4v";

const App = () => {
  return (
      <div className="holder">
        <video  autoPlay loop muted id = "bgvideo">
          <source src = {bgvideo} type = "video/mp4"/>
        </video>
        <div className="main-div">
          <h2 className="main-heading">Search Your<br></br> Favourite Movies</h2>
          <Search />
        </div>
      </div>
  )
}

export default App