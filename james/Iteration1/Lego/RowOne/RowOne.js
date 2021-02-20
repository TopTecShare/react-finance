import React from "react";
import Icon from "../Icon";
import QuoteData from "./QuoteData";
// import Quotes from "./Quotes";
import 'bootstrap/dist/css/bootstrap.min.css';

function RowOne() {

    return (
        <div className="rowOneEl container" >
            <Icon />
            <QuoteData />
        </div>
    )
}

export default RowOne;