export default function(historical) {
    return {
        title: {
            text: 'Comparative Coin Value Over Time'
        },
        subtitle: {
            text: "Source: thesolarfoundation.com"
        },
        yAxis: {
            title: {
                text: 'Price'
            }
        },
        xAxis: {type: "datetime"},
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: historical,

        responsiveness: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend:{
                        layout: "horizontal",
                        align: "center",
                        verticalAlign: "bottom" 
                    } 
                }
            }]
        }
    };
}