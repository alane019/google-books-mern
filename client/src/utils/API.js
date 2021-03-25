import axios from "axios"; 

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = process.env.apikey; 
console.log({apiKey});

export default {
    search: function(query){


    let str = axios.get(baseUrl + query + apiKey);
    console.log(str);

    console.log("title: " + str.items.kind.volumeInfo.title);
    console.log("authors: " + str.items.kind.volumeInfo.authors);
    console.log("description: " + str.items.kind.volumeInfo.description);
    console.log("image: " + str.items.kind.volumeInfo.image);
    console.log("link: " + str.items.kind.volumeInfo.image);
    return axios.get(str);
    }
};