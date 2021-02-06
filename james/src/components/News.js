import React from "react";

function News (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.link}</p>
            <p>{props.publisher}</p>
        </div>
    )
}

export default News;