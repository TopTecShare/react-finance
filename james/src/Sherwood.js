import React, { useState, useEffect } from "react";
import axios from "axios";
import Stock from "./Stock";
import "./Stock.css";
// import API from "./utils/API";


const Sherwood = () => {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then(res => {
            setStocks(res.data);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredStocks = stocks.filter(stock => 
        stock.name.toLowerCase().includes(search.toLocaleLowerCase())
        )

    return (
        <div>
            <div>
                <h1>Search a Stock</h1>
                <form >
                    <input type="text" placeholder="Search"
                className="stock-input" onChange={handleChange}/>

                </form>
            </div>
            {filteredStocks.map(stock => {
                return (
                    <Stock key={stock.id} 
                    name={stock.name} 
                    image={stock.image}
                    symbol={stock.symbol} 
                    marketcap={stock.market_cap}
                    price={stock.current_price}
                    priceChange={stock.price_change_percentage_24h}
                    volume={stock.total_volume}
                    />
                )
            })}
        </div>
    )
}

export default Sherwood;
