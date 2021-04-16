import axios from "axios"; 

export default {

    getSearchResults: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    addBook: function(book) {
        return axios.post("api/books/saved/" + book);


        // console.log(` [ axios API.js addbook function ran. Book value:  `)
        // console.log(book.authors);
        // console.log(" ]");

        // axios.post("/api/books",  {
        //     image: book.thumbnail, 
        //     title: book.title, 
        //     description: book.description, 
        //     authors: book.authors, 
        //     link: book.previewLink 
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   });
    }


};