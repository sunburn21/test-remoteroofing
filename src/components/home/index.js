// importing libraries
import React from 'react';
import {Link} from 'react-router-dom';

// importing css 
import './index.css';

//implemented home page component
export default ()=>{
    return(
        <div className="home-content">
        <div className="home-tile">
            <Link to="/series">
                <div className="home tile"> 
                <div>Series</div>                                            
                </div>
            </Link>                    
            <p>Popular series</p>
        </div> 
        <div className="home-tile">                
            <Link to="/movies">
                <div className="home tile">                    
                    <div>Movies</div>                             
                </div>
            </Link>                                    
            <p>Popular movies</p>
        </div> 
    </div>
        )
}