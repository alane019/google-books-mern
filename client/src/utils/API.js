import axios from "axios"; 

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
// const apiKey = process.env.apikey; 
// console.log({apiKey});


export default {
        getSearchResults: function(query) {
        return axios.get(baseUrl + query)
          // .then((resp) => {console.log(resp)})
          // .catch(err => console.log(err))
    }
};