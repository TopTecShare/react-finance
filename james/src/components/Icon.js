import React from "react";
const blackberry = require("../assets/blackberry1.jpg");

function Icon() {
    const iconStyle = {
        width: "240px",
        height: "140px"
    }

    return (
        <div>
            <img src={blackberry} style={iconStyle} alt="blackberry"/>
        </div>
    )
}

export default Icon;