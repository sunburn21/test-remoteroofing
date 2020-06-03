// importing libraries
import React from 'react';

//import css
import './index.css';


// implement the item list wrapper
export default (props)=>{
    return(
        <div className="items-list">
        {props.items.map((e,i) => {
        return (
            <div className="col" key={i}>
                <div className="tile">
                    <img alt="Item" src={e.images['Poster Art'].url} />
                    <h4>{e.title}</h4>
                </div>
            </div>
        );
        })}
        </div>
        
    )
}