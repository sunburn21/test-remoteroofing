import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default ()=>{
    return(
        <div className="flex-grid">
        <div className="col">
            <Link to="/series">
                <div className="home tile">                    
                    <h3>Series</h3>                                            
                </div>
            </Link>                    
            <p>Popular series</p>
        </div> 
        <div className="col">                
            <Link to="/movies">
                <div className="home tile">                    
                    <h3>Movies</h3>                             
                </div>
            </Link>                                    
            <p>Popular movies</p>
        </div> 
    </div>
        )
}