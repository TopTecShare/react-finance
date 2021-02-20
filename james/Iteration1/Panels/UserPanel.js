import React from 'react';
// import Dropdown from "./Dropdown";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

const UserPanel = () => {
    return (
        
        <PanelBar>
            <PanelBarItem expanded={true} title="Fund Managers">
                <div>
                {fundInfo && fundInfo.managers.map((item, idx) => (
                    <div className="manager" key={idx}>
                    <img src={`/team/${item.firstName}${item.lastName}.png`}
                        alt={item.firstName + ' ' + item.lastName} />
                    <span className="manager-info">
                        <h2>{item.firstName + ' ' + item.lastName}</h2>
                        <p>{item.position}</p>
                    </span>
                    </div>
                ))}
                </div>
            </PanelBarItem>
        </PanelBar>
    )
}

export default UserPanel
