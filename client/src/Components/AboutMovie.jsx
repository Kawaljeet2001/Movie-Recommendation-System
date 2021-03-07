import React from 'react'

const AboutMovie = (props) => {
    // console.log(props.MovieCast);
    function printruntime(min)
    {
        var hours = Math.floor(min/60);
        var min2 = min%60;

        return <p>{hours}h{'\u00A0'}{min2}m{'\u00A0'}</p>
    }
    function printmoney(mon)
    {   
        var money =0 ;
        if(mon >= 1000000000)
        {
            money = mon/1000000000;
            money = money.toFixed(2);

            return String(money) + " billion";
        }
        else if(mon >= 1000000)
        {
            money = mon/1000000;
            money = money.toFixed(0);

            return String(money) + " million";
        }
        else
        {
            money = mon/1000;
            money = money.toFixed(0);

            return String(money) + " thousand";
        }
        
    }
    return (
        <div className = "About-Movie">
            <div className = "image-holder">
                
                <div className = "Text-on-Banner">
                    <div className = "inner">
                        <h2>{props.MovieName}</h2>
                            <div>
                                <p>{props.Details.data.results[0].release_date.slice(0 , 4)}{'\u00A0'}</p>
                                <p>|{'\u00A0'}</p>
                                <p className = "agelimit">{props.Details.data.results[0].adult !== 'false' ? 'PG-13' : '18+'}</p>
                                <p>{'\u00A0'}|{'\u00A0'}</p>
                                {printruntime(props.MovieMetadata.data.runtime)}
                                <p> |{'\u00A0'} </p>
                                <p>{props.MovieMetadata.data.genres[0].name}</p>
                            </div>
                            <p className = "Overview">{props.Details.data.results[0].overview}</p>                            
                        </div>
                </div>
                <div id = "image"></div>
                <img alt = {props.MovieName} src = {props.imagepathprefix + props.Details.data.results[0].backdrop_path}/>
            </div>
            <div className = "Ratings">
                    <div>
                    <p>Budget: ${printmoney(props.MovieMetadata.data.budget)}</p>
                        {/* {printmoney(props.MovieMetadata.data.budget)} */}
                    </div>
                    <div>
                        <p>Worldwide Collection: ${printmoney(props.MovieMetadata.data.revenue)}</p>
                    </div>
                    <div>
                        <p>Imdb Rating: {props.MovieMetadata.data.vote_average}</p>
                    </div>
                    <div>
                        <p>Popularity Score: {props.MovieMetadata.data.popularity}</p>
                    </div>
            </div>
        </div>
    )
}

export default AboutMovie
