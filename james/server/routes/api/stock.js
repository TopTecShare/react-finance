const request = require("superagent");

module.exports = (app) => {
    app.post("/api/stock/portfolio", function (req, res, next) {
        const apikey= 'demo';
    // Assuming look up user
    // Retrieve ticker symbols
    // Alpha Vantage API ???????
        const tickers = ['MSFT'] ;

        //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&ymbol=MSFT&apikey=demo
        let completed = 0;
        const results = [];
        for (let i = 0; i < tickers.length; i++) {
            const ticker = tickers[i];
          request
            .get('https://www.alphavantage.co/query')
            .query({ 'function': 'TIME_SERIES_DAILY' })
            .query({ symbol: ticker })
            .query({ apikey: apikey })
            // .then(res => res.json())
            .then((res) => {
                completed +=1;
                
                if (completed === tickers.length) {
                    // Alltickers have finished their request
                }
                
            });
        }
    });
};