import React, { Component } from "react";
import API from "../utils/API";
import Quotes from "./Quotes";
class Data extends React.Component {
state = {
    apiData: [],
    apiNews :[]
}
componentDidMount() {
    API.getStocks("tesla")
    .then(res => {
        console.log(res);
        let apiData = []
        let apiNews = []
        for (let i = 0; i < res.data.quotes.length; i++) {
           let record = {
                name : res.data.quotes[i].shortname,
                symbol: res.data.quotes[i].symbol,
                score: res.data.quotes[i].score
            }
            apiData.push(record)   
        }

        for (let j = 0; j < res.data.news.length; j++) {
            let content = {
                link: res.data.news[j].link,
                title: res.data.news[j].title,
                publisher: res.data.news[j].publisher
            }
            apiNews.push(content)
        }

        this.setState({ apiData: apiData });
        this.setState({ apiNews: apiNews });
    })
    .catch(err => console.log(err));
}
    render() {
        return (
        <div>  
            {this.state.apiData.map( (rec,key) => <Quotes
             name= {rec.name}
             symbol ={rec.symbol}
             score = {rec.score}
             key={key}/>)}   
                
       </div> 
       )
}
}

export default Data;