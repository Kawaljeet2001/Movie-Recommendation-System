import React from 'react'

const RecommendationTiles = (props) => {
    return (
        <div className = "Recommendation_Tiles">
            <img src = {props.PosterPath}/>
            <p>{props.MovieName}</p>
        </div>
    )
}

export default RecommendationTiles
