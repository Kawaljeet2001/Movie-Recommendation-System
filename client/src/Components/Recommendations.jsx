import React , {useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import axios from 'axios';


const Recommendations = () => {
  const location = useLocation();
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

  function printrecommendations()
  {
    var keys = Object.keys(Recommendations);
    var values = Object.values(Recommendations);

    var returnans = []
    for(var i=0;i<10;i++)
    {
      returnans.push(
        <p key = {i}>{keys[i]} {values[i]}</p>
      )
    }

    return returnans;
  }

  useEffect(() => {
    searchRecommendations(location.state.MovieName)
  } , [location])
  console.log(location.state);
  return (
    <div>
      <h2>People also Watched: </h2>
      {Recommendations ? 
        printrecommendations()
      : null}
    </div>
  )
}

export default Recommendations
