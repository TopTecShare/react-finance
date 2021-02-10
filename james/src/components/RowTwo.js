import React from "react";
import NewsData from "./NewsData";
import Icon from "./Icon";

function RowTwo() {
    const rowStyle = {
        display: "flexbox",
        flexDirection: "row",
        minWidth: "100%",
        paddingLeft: "50px",
        borderStyle: "dotted",
        border: "teal",
        backgroundColor: "#284b4b",
        color: "whitesmoke",
        paddingTop: "20px",
    }
    return (
        <div className="row" style={rowStyle}>
            <NewsData />
            <Icon />
        </div>
    )
}

export default RowTwo; 