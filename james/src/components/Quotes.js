import React from "react";

function Quotes (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.symbol}</p>
            <p>{props.score}</p>
        </div>
    )
}

export default Quotes;
