import axios from "axios"; 

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
        getSearchResults: function(query) {
        return axios.get(baseUrl + query)
    }
};