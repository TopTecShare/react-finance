import React from "react";

function News (props) {
    return (
        <div className="container">
            <h3>{props.title}</h3>
            {/* <p>{props.link}</p>
            <p>{props.publisher}</p> */}
        </div>
    )
}

export default News;
