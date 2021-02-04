import axios from "axios";

let API = {
    getStocks: function(searchString) {
        return axios({
            "method":"GET",
            "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
            "params":{"q":searchString, "region":"US"},
            "headers": {
                "x-rapidapi-key": "dd74b83b8emsha204c262aaccdbbp1e7099jsnd652157dfa85",
	            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	            "useQueryString": true
                }});
    }
};

export default API;