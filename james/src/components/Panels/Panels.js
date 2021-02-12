import React from 'react';
// import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import UserPanel from "./User/UserPanel";
import DiversityPanel from "./Diversity/DiversityPanel";
import PerformancePanel from "./Performance/PerformancePanel";
import NewsPanel from "./News/NewsPanel";

const Panels = () => {
    return (
        <div className="panels">
            <div className="panel-user">
                <UserPanel />
            </div>
            <div className="panel-diversity">
                <DiversityPanel />
            </div>
            <div className="panel-performance">
                <PerformancePanel />
            </div>
            <div className="panel-news">
                <NewsPanel />
            </div>
        </div>
    )
}

export default Panels;
