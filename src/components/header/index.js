// importing libraries
import React from 'react';
import {Link} from 'react-router-dom'

// importing css 
import './index.css';


// implemented navbar component 
export default ()=>{
    return(
        <div>
            <div className="navbar wrapper">
                <h1 className="col">DEMO Streaming</h1>
                <div className="col">
                    <a>Login</a>
                    <button>Start your free trial</button>
                </div>
            </div>
            <div className="sub-navbar">
                <h2><Link to='/'>Popular titles</Link></h2>
            </div>
        </div>
    )
}