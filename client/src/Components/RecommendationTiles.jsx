import React from 'react'
import {Link} from 'react-router-dom';

const RecommendationTiles = (props) => {
    return (
        <div className = "Recommendation_Tiles">
            <div className = "image-holder">
                <img alt = {props.MovieName} src = {props.PosterPath}/>
           </div>
            <Link
                to={{
                    pathname: "/recommend2",
                    state: { MovieName: props.MovieName }
                }}
            >
                <p>{props.MovieName}</p>
            </Link>
        </div>
    )
}

export default RecommendationTiles

