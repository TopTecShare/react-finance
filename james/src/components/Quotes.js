import React from "react";

function Quotes (props) {
    // const divStyle ={
    //         maxHeight: "200px",
    //         maxWidth: "50%"
    // }
    return (
        <div className="container" >
            <h3>{props.shortname}</h3>
             <p>{props.symbol}</p> 
            <p>{props.score}</p> 
        </div>
    )
}

export default Quotes;
