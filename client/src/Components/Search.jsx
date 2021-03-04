import React, { useState, useEffect } from 'react'
import movie_list from "../movies_list";
import axios from 'axios';

const Search = (props) => {
    const [formval, setformval] = useState("");
    const [Movies, setMovies] = useState(movie_list);
    const [filteredmovies, setfilteredmovies] = useState([]);
    const [Recommendations, setRecommendations] = useState({});
    async function getdata(obj) {
        try {

            var res = await axios.post("/api/recommend/", obj)
            setRecommendations(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    function searchRecommendations(e) {
        var sendobj = {
            "title": e
        }

        getdata(sendobj);

    }

    useEffect(() => {
        setfilteredmovies(
            Movies.filter((movie) =>
                movie.toString().toLowerCase().includes(formval.toString().toLowerCase())
            )
        )
    }, [formval, Movies])
    return (
        <div className = "search-section">
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

                                else
                                return null
                            }) : null}
                        </div>
                    </div>
                    <input className="submit-button" type="submit" value={'\u2192'} onClick={() => {
                        searchRecommendations(formval)
                        setformval("")
                    }} />
                </div>

            </div>
        </div>
    )
}

export default Search
