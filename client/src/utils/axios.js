import axios from "axios"; 

const baseUrl = "https://books.google.com/books/content?id=wjq2wWsAaKYC&printsec=frontcover&img=1&zoom=5";
const apiKey = process.env.apikey; 
console.log({apiKey});

export default {
    search: function(query){
        return axios.get(baseUrl + query + apiKey);
    }
};