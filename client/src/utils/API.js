import axios from "axios"; 

export default {

    // API calls for data stored in this application's database
    addBook: function(book) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
         console.log(" console logging value of book argument in addBook function,  in client side API.js ")
        console.log(book);
        console.log({book});
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        return axios.post("api/books/", book);

    },

    getSavedBooks: function() {
        return axios.get("api/books/");
    },

    searchSavedByTitle: function(query) {
        return axios.get("api/books/search/title");
    },

    removeById: function(bookId){
        axios.delete("/api/books/book/" + bookId)
    }

};