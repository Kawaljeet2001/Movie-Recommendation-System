import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                <Link className = "logo-link" to = "/">
                    <h2>M R S</h2>
                </Link>
            </div>
            <div className='name'>
                <p>KSB</p>
            </div>
        </div>
    )
}

export default Navbar
