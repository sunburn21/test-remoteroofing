import React from 'react';
import {Link} from 'react-router-dom';
import clapper from '../../assets/placeholder.png';

import './index.css';

export default ()=>{
    return(
        <div className="flex-grid">
        <div className="col">
            <Link to="/series">
                <div className="home tile"> 
                <div>Series</div>                                            
                </div>
            </Link>                    
            <p>Popular series</p>
        </div> 
        <div className="col">                
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