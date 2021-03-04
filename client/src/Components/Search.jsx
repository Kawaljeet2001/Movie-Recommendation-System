import React, { useState, useEffect } from 'react'
import movie_list from "../movies_list";

const Search = (props) => {
    const [formval, setformval] = useState("");
    const [Movies, setMovies] = useState(movie_list);
    const [filteredmovies, setfilteredmovies] = useState([]);

    useEffect(() => {
        setfilteredmovies(
            Movies.filter((movie) =>
                movie.toString().toLowerCase().includes(formval.toString().toLowerCase())
            )
        )
    }, [formval, Movies])

    useEffect(() => {
        console.log(window.innerWidth);
    } , [window.innerWidth])
    return (
        <div className="Search-div">

            <div className="Search-Form">
                <div className="input-field-autocomplete-holder">
                    <input className="input-field" type="text" onChange={(e) => {
                        setformval(e.target.value)

                    }} value={formval} placeholder="Enter a movie name" />
                    <div className="Search-Autocomplete">
                        {formval ? filteredmovies.map((item, index) => {
                            if (index <= 10) {
                                return <button key={index} onClick={() => {
                                    console.log(item)
                                    setformval(item)
                                }}>{item}</button>
                            }
                        }) : null}
                    </div>
                </div>

                <input className="submit-button" type="submit" value={'\u2192'} onClick={() => {
                    props.handleSubmit(formval)
                    setformval("")
                }} />
            </div>

        </div>
    )
}

export default Search
