import React from "react";
import API from "../../../utils/API";
import Quotes from "../Lego/RowOne/Quotes";
import News from "../Lego/RowTwo/News";
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

            {this.state.apiNews.map( (rec,key) => <News
             link= {rec.link}
             title ={rec.title}
             publisher = {rec.publisher}
             key={key}/>)}          
       </div> 
       )
}
}

export default Data;