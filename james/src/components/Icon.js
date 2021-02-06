import React from "react";
// const blackberry = require("../assets/blackberry1.jpg");
import logo from "../logo.svg";

function Icon() {
    const iconStyle = {
        width: "240px",
        height: "140px"
    }

    return (
        <div>
            {/* <img src={blackberry} style={iconStyle} alt="blackberry"/> */}
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Icon;