import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Search from "./Search";
const Recommendations = () => {

    const [Recommendations , setRecommendations] = useState({});
    async function getdata(obj)
    {
        try{

          var res = await axios.post("/api/recommend/" , obj)
          setRecommendations(res.data);
        }catch(e)
        {
          console.log(e);
        }
    }

  function searchRecommendations(e)
  {
    var sendobj = {
      "title" : e
    }

    getdata(sendobj);

  }
  function printrecommendations()
  {
      var objkeys =  Object.keys(Recommendations);
      var objval = Object.values(Recommendations);
      
      var lengthofitems = objkeys.length
      
      var arr = []
      for(var i=0;i<lengthofitems;i++)
      {
          arr.push(
              <div key = {i}>
                  <h3>{objkeys[i]}</h3>
                  <p>{objval[i]}</p>
              </div>
          )
      }

      return arr;

  }

  useEffect( ()=>{
      printrecommendations()
  }, [Recommendations])
  return (
    <div>
      <Search
      handleSubmit = {(e) => {searchRecommendations(e)}}
      />
      <h1>This is my webpage</h1>
      {Recommendations ? printrecommendations() : null}
    </div>
  )
}

export default Recommendations;