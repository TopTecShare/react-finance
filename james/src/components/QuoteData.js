import React from "react";
import API from "../utils/API";
import Quotes from "./Quotes";

class QuoteData extends React.Component {
    state= {
        apiQuote: []
    }

    componentDidMount() {
        API.getStocks("tesla")
        .then(res => {
            console.log(res);
            let apiQuote = []
            for (let j = 0; j < res.data.quotes.length; j++) {
                let record = {
                    name: res.data.quotes[j].name,
                    symbol: res.data.quotes[j].symbol,
                    score: res.data.quotes[j].score
                }
                apiQuote.push(record)
            }
            this.setState({ apiQuote: apiQuote });
        })
        .catch(err => console.log(err));
    }
        render() {
            return (
                <div>
                   {this.state.apiQuote.map( (rec,key) => <Quotes
                    name= {rec.name}
                    symbol ={rec.symbol}
                    score = {rec.score}
                    key={key}/>)}  
                </div>
            )
        }
}

export default QuoteData;