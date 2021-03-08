import React, { useState, useEffect, useRef } from 'react';
import Cast from "./Cast";

const Accordian = (props) => {
    const [iscollapsed, setiscollapsed] = useState(false);
    const content = useRef(null);
    function toggleheight() {
        setiscollapsed(!iscollapsed);
    }

    useEffect(() => {
        content.current.style.maxHeight = iscollapsed ? `${content.current.scrollHeight}px` : '350px'
    }, [iscollapsed, content])

    return (
        <div className="Accordian-holder">
            <div className = "accordian-holder-inner">
                <h2 className="cast-heading">Cast</h2>
                <button onClick={toggleheight}>
                    {!iscollapsed ?
                        <i className="fa fa-angle-double-down fa-lg fa-3x" aria-hidden="true"></i>
                        :
                        <i className="fa fa-angle-double-up fa-lg fa-3x" aria-hidden="true"></i>
                    }
                </button>

            </div>
            <div className="inner-div cast-holder Accordian-content" ref={content}>
                {
                    props.CastData.map((item, index) => {
                        if (index < 15) {
                            return <Cast
                            key = {index}
                                imageprefix={props.imagepathprefix}
                                MovieCast={item}
                            />
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}

export default Accordian
