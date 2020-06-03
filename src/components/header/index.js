// importing libraries
import React from 'react';
import {Link} from 'react-router-dom'

// importing css 
import './index.css';


// implemented header component 
export default ()=>{
    return(
        <div>
            <div className="header flex-grid">
                <h1 className="col">DEMO Streaming</h1>
                <div className="col">
                    <a>Login</a>
                    <button>Start your free trial</button>
                </div>
            </div>
            <div className="sub-header">
                <h2><Link to='/'>Popular titles</Link></h2>
            </div>
        </div>
    )
}