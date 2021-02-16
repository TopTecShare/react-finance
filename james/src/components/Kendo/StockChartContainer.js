import React from 'react';
import {
    StockChart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';

// import 'hammerjs';

import stockData from "../../stock-data.json";


const StockChartContainer = () => {
    return (
        <div>
            <StockChart>
                <ChartTitle text="The Boeing Company NYSE:BA" />
                <ChartSeries>
                    <ChartSeriesItem
                        data={stockData}
                        type="candlestick"
                        openField="Open"
                        closeField="Close"
                        lowField="Low"
                        highField="High"
                        categoryField="Date"
                    />
                </ChartSeries>
                <ChartNavigator>
                    <ChartNavigatorSelect from={2009} to={2010} />
                    <ChartNavigatorSeries>
                        <ChartNavigatorSeriesItem
                            data={stockData}
                            type="area"
                            field="Close"
                            categoryField="Date"
                        />
                    </ChartNavigatorSeries>
                </ChartNavigator>
            </StockChart>
        </div>
    )
}


export default StockChartContainer;
