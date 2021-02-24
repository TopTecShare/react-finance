import React from "react";
import axios from 'axios';
// import API from "../../utils/API";
// import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
// import axios from "axios";


export default class PositionsPanel extends React.Component {
    // state = {
    //     quoteData: []
    // }

    // componentDidMount() {
    //     API.getStocks("tesla")
    //     .then(res => {
    //         console.log(res)
    //         let quoteData = []
    //         for (let j = 0; j < res.data.quotes.length; j++) {
    //             let record = {
    //                 shortname: res.data.quotes[j].shortname,
    //                 symbol: res.data.quotes[j].symbol,
    //                 score: res.data.quotes[j].score
    //             }
    //             quoteData.push(record)
    //         }
    //         console.log('quote data:', quoteData)
    //         this.setState({ quoteData: quoteData });
    //     })
    //     .catch(err => console.log(err));
    // }
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        })
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
    // render() {

    // return (
    //     <Grid
    //         // data={quoteData}
    //         style={{ height: 700 }}
    //         >
    //         <GridColumn title="Company" field="shortname" locked={true} width={100} />
    //         <GridColumn title="Stock" field="symbol" />
    //         <GridColumn title="Quote Type" field="quoteType" />
    //         <GridColumn title="Ticker" field="exchange" />
    //     </Grid>
    // )

    // }
}




