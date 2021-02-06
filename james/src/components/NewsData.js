import React from "react";
import API from "../utils/API";
import News from "./News";

class NewsData extends React.Component {
    state= {
        apiNews: []
    }

    componentDidMount() {
        API.getStocks("nike")
        .then(res => {
            console.log(res);
            let apiNews = []
            for (let j = 0; j < res.data.news.length; j++) {
                let content = {
                    link: res.data.news[j].link,
                    title: res.data.news[j].title,
                    publisher: res.data.news[j].publisher
                }
                apiNews.push(content)
            }
            this.setState({ apiNews: apiNews });
        })
        .catch(err => console.log(err));
    }
        render() {
            return (
                <div>
                    {this.state.apiNews.map( (rec,key) => <News
                    link= {rec.link}
                    title ={rec.title}
                    publisher = {rec.publisher}
                    key={key}/>)}  
                </div>
            )
        }
}

export default NewsData;
