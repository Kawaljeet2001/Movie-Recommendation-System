import React from 'react'
import {Link} from 'react-router-dom';

const RecommendationTiles = (props) => {
    return (
        <div className = "Recommendation_Tiles">
            <div className = "image-holder">
                <img alt = {props.MovieName} src = {props.PosterPath}/>
           </div>
            <Link
                onClick = {() => {props.setToggle('false')}}
                to={{
                    pathname: "/recommend",
                    state: { MovieName: props.MovieName }
                }}
                
            >
                <p>{props.MovieName}</p>
            </Link>
        </div>
    )
}

export default RecommendationTiles

