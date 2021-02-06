import React from "react";
import Icon from "./Icon";
import QuoteData from "./QuoteData";
// import Quotes from "./Quotes";
import 'bootstrap/dist/css/bootstrap.min.css';

function RowOne() {
    const rowStyle = {
        display: "flex"
    }

    return (
        <div style={rowStyle}>
            <Icon />
            <QuoteData />
        </div>
    )
}

export default RowOne;