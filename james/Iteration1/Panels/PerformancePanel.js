import React from 'react'

const PerformancePanel = () => {
    return (
        <Chart>
            <ChartTitle text="Fund Performance" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="line" data={data} />
            </ChartSeries>
            <ChartTooltip render={renderTooltip} />
        </Chart>
    )
}

export default PerformancePanel
