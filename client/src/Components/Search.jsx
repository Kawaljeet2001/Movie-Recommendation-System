import React, { useState , useEffect } from 'react'
import movie_list from "../movies_list";

const Search = (props) => {
    const [formval, setformval] = useState("");
    const [Movies, setMovies] = useState(movie_list);
    const [filteredmovies , setfilteredmovies] = useState([]);

    useEffect(() => {
        setfilteredmovies(
            Movies.filter((movie) =>
            movie.toString().toLowerCase().includes(formval.toString().toLowerCase())
        )
        )
    }, [formval , Movies])
     
    return (
        <div>
            <h1>Search your Favourite Movies</h1>
            
            <div className = "Search-Form">
                <input type="text" onChange={(e) => {
                   setformval(e.target.value)
                 
                }} value={formval} placeholder="Enter a movie name" />
                <input type="submit" onClick = {() => {
                    props.handleSubmit(formval)
                    setformval("")
                    }}/>
            </div>
            <div className = "Search-Autocomplete">
                {filteredmovies.map((item , index) => {
                    if(index<=10)
                    {
                        return <button key = {index} onClick = {() => {console.log(item)
                            setformval(item)
                            }}>{item}</button>
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Search
