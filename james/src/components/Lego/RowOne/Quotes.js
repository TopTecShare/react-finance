import React from "react";

function Quotes (props) {

    return (
        <div className="quotes container" >
            <h3>{props.shortname}</h3>
             {/* <p>{props.symbol}</p> 
            <p>{props.score}</p>  */}
        </div>
    )
}

export default Quotes;
