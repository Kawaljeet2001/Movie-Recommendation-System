import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecommendationTiles from "./RecommendationTiles";
import Spinner from "./Spinner";
import AboutMovie from "./AboutMovie";
import Accordian from './Accordian';

const Recommendations = () => {
  const location = useLocation();
  const [Recommendations, setRecommendations] = useState();
  const [Toggle , setToggle] = useState(false);
  const imagepathprefix = "https://image.tmdb.org/t/p/original";
  useEffect(() => {

    async function getAllData() {
      try {
        const MovieDetails = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=` + encodeURI(location.state.MovieName) + `&page=1&include_adult=false`);
        const MovieRecommendations = await axios.post("/api/recommend/", { "title": String(location.state.MovieName) });

        //fetching the details of all the recommendations
        var MovieRecommendationDetails = [];
        var Movie_metadata;
        var Movie_Cast;
        if (MovieDetails) {
          Movie_metadata = await axios.get('https://api.themoviedb.org/3/movie/' + String(MovieDetails.data.results[0].id) + `?api_key=${process.env.API_KEY}&language=en-US`)
          Movie_Cast = await axios.get('https://api.themoviedb.org/3/movie/' + String(MovieDetails.data.results[0].id) + `/credits?api_key=${process.env.API_KEY}&language=en-US`)
        }
        //getting the keys of the Recommendations
        var keys = Object.keys(MovieRecommendations.data);
        for (var i = 0; i < 10; i++) {
          var temp = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=` + encodeURI(keys[i]) + `&page=1&include_adult=false`);
          MovieRecommendationDetails.push(temp);
        }
        var FinalDetailsObj = {
          "MovieDetails": MovieDetails,
          "MovieRecommendations": MovieRecommendations.data,
          "MovieRecommendationDetails": MovieRecommendationDetails,
          "MovieMetadata": Movie_metadata,
          "MovieCast": Movie_Cast
        };

        setRecommendations(FinalDetailsObj);
      }
      catch (e) {
        console.log(e)
      }
    }

    getAllData();
  }, [setToggle , Toggle])

  function printRecommendationTiles() {
    var keys = Object.keys(Recommendations.MovieRecommendations);
    var printarray = [];
    for (var i = 0; i < 10; i++) {

      printarray.push(
        <RecommendationTiles
          key={i}
          PosterPath={imagepathprefix + Recommendations.MovieRecommendationDetails[i].data.results[0].poster_path}
          MovieName={keys[i]}
          setToggle = {(e)=>{setToggle(!Toggle)}}
        />
      )
    }

    return printarray;

  }
  return (
    <>
      {Recommendations ?
        <div className="Recommendations-Page">

          <AboutMovie
            Details={Recommendations.MovieDetails}
            imagepathprefix={imagepathprefix}
            MovieName={location.state.MovieName}
            MovieMetadata={Recommendations.MovieMetadata}
          />
          <Accordian
            CastData={Recommendations.MovieCast.data.cast}
            imagepathprefix={imagepathprefix}
            
          />
          <h2 className="Recommendation-title">Movie Recommendations</h2>
          <div className="Recommendations-holder">
            {printRecommendationTiles()}
          </div>
        </div>
        : <Spinner />}
    </>

  )
}

export default Recommendations
