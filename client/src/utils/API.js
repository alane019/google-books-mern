import axios from "axios"; 

export default {

    // API calls for data stored in this application's database
    addBook: function(book) {
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