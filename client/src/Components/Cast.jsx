import React from 'react'

const Cast = (props) => {
    return (
        <div className = "Cast-Tile">
            <div>
                <img src = {props.imageprefix + props.MovieCast.profile_path} alt = "image" />
            </div>
        </div>
    )
}

export default Cast
