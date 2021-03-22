import axios from "axios"; 

const baseUrl = "";
const apiKey = process.env.apikey; 
console.log({apiKey});

export default {
    search: function(query){
        return axios.get(baseUrl + query + apiKey);
    }
};