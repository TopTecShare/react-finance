import React from 'react';
import stock from '../apis/stock';
import '../css/SearchCard.css';
import '../css/styles.css';
import { FaSearch } from 'react-icons/fa'

class SearchCard extends React.Component{

    state = {
        search_stockArray: [],
        loading_api: false
    };

 

        if(localStorage.getItem("historyStockArray") !== null){
            let lsArray = JSON.parse(localStorage.getItem("historyStockArray"));
            if(window.confirm("Reload previous stock?")){
                for(var i = 0; i < lsArray.length; i++){
                    this.sendSearchResult(false, lsArray[i])
                }
            }else{
                localStorage.removeItem("historyStockArray");
            };

        };

        sendSearchResult = async (item, value) => {
            let stockValue;
            if(item){
                stockValue = document.querySelector(".stock-code__value").value.toUpperCase();
            }else{
                stockValue = value;
            }
    
            let startDate = Math.round(new Date().getTime() / 1000);
            let endDate = startDate - (72 * 3600);
            let checkForExist = false;

            if(this.state.search_stockArray.includes(stockValue)){
                alert("Already exists");
                document.querySelector(".stock-code__value").value = '';
            }else{
                checkForExist = true;
            }
    
            const table_response = await stock.get('/quote', {
                params: {
                  symbol: stockValue,
                  token: 'c0d043v48v6oo0bfap50'
                }
            });
}
