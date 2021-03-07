import React from 'react'

const RecommendationTiles = (props) => {
    return (
        <div className = "Recommendation_Tiles">
            <div className = "image-holder">
                <img alt = {props.MovieName} src = {props.PosterPath}/>
            </div>
            <p>{props.MovieName}</p>
        </div>
    )
}

export default RecommendationTiles
