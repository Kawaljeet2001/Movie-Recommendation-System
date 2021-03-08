import React from 'react'

const Cast = (props) => {
    return (
        <div className = "Cast-Tile">
            <div className = "cast-image">
                <img src = {props.imageprefix + props.MovieCast.profile_path} alt = "imagebnieg" />
            </div>
            <div className = "cast-name">
                <h5>{props.MovieCast.name}</h5>
                <h6>{props.MovieCast.character}</h6>
            </div>
        </div>
    )
}

export default Cast
