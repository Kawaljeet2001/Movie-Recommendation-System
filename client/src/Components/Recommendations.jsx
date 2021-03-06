import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecommendationTiles from "./RecommendationTiles";

const Recommendations = () => {
  const location = useLocation();
  const [Recommendations, setRecommendations] = useState();

  const imagepathprefix = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    
    async function getAllData()
    {
      try{
        const MovieDetails = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d7dd816b5caceb61abc1a42d5913bb2a&language=en-US&query=` + encodeURI(location.state.MovieName) + `&page=1&include_adult=false`);
        const MovieRecommendations = await axios.post("/api/recommend/", {"title" : String(location.state.MovieName)});

        //fetching the details of all the recommendations
        var MovieRecommendationDetails = [];

        //getting the keys of the Recommendations
        var keys = Object.keys(MovieRecommendations.data);
        for (var i=0;i<10;i++)
        {
          var temp = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d7dd816b5caceb61abc1a42d5913bb2a&language=en-US&query=` + encodeURI(keys[i]) + `&page=1&include_adult=false`);
          MovieRecommendationDetails.push(temp);
        }
        var FinalDetailsObj = {
          "MovieDetails" : MovieDetails,
          "MovieRecommendations" : MovieRecommendations.data,
          "MovieRecommendationDetails" : MovieRecommendationDetails
        };

        setRecommendations(FinalDetailsObj);
        // console.log(Recommendations);
      }
      catch(e)
      {
        console.log(e)
      }
    }

    getAllData();
  }, [])

  return (
    <div>
      {Recommendations ? console.log(Recommendations) :null}
      <h2>People also Watched: </h2>
      <RecommendationTiles
      PosterPath = {imagepathprefix + "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"}
      MovieName = "Avatar"
      />
    </div>
  )
}

export default Recommendations
