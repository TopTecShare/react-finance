import React from 'react';
// import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import UserPanel from "./components/Panels/UserPanel";
import DiversityPanel from "./components/Panels/DiversityPanel";
import PerformancePanel from "./components/Panels/PerformancePanel";
import NewsPanel from "./components/Panels/NewsPanel";

const Dashboard = () => {
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

export default Dashboard;
