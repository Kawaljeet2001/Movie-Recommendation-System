import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecommendationTiles from "./RecommendationTiles";
import Spinner from "./Spinner";
import AboutMovie from "./AboutMovie";
import Cast from "./Cast";

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
        var Movie_metadata;
        var Movie_Cast;
        if(MovieDetails)
        {
          Movie_metadata   = await axios.get('https://api.themoviedb.org/3/movie/' + String(MovieDetails.data.results[0].id) + '?api_key=d7dd816b5caceb61abc1a42d5913bb2a&language=en-US')
          Movie_Cast = await axios.get('https://api.themoviedb.org/3/movie/'+ String(MovieDetails.data.results[0].id) + '/credits?api_key=d7dd816b5caceb61abc1a42d5913bb2a&language=en-US')
        }
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
          "MovieRecommendationDetails" : MovieRecommendationDetails,
          "MovieMetadata" : Movie_metadata ,
          "MovieCast" : Movie_Cast
        };

        setRecommendations(FinalDetailsObj);
      }
      catch(e)
      {
        console.log(e)
      }
    }

    getAllData();
  }, [])

  function printRecommendationTiles()
  {
    var keys = Object.keys(Recommendations.MovieRecommendations);
    var printarray = [];
    for (var i=0;i<10;i++)
    {

      printarray.push(
            <RecommendationTiles
              key = {i}
              PosterPath = {imagepathprefix + Recommendations.MovieRecommendationDetails[i].data.results[0].poster_path}
              MovieName = {keys[i]}
            />
      )  
    }

    return printarray;
    
  }
  return (
    <div className = "Recommendations-Page">
      {Recommendations ? 
      <AboutMovie
        Details = {Recommendations.MovieDetails}
        imagepathprefix = {imagepathprefix}
        MovieName = {location.state.MovieName}
        MovieMetadata = {Recommendations.MovieMetadata}
      />:
      <Spinner/>
    }
    <h2 className = "cast-heading">Cast</h2>
      <div className = "cast-holder">
        {Recommendations ?
          Recommendations.MovieCast.data.cast.map((item, index) => {
            if (index < 15) {
              return <Cast
                imageprefix={imagepathprefix}
                MovieCast={item}
              />
            }

            return null;

          })
          : null}
      </div>
      <h2 className = "Recommendation-title">Movie Recommendations</h2>
      <div className = "Recommendations-holder">
        {Recommendations ? 
          printRecommendationTiles()
        : <Spinner/>}
      </div>
    </div>
  )
}

export default Recommendations
