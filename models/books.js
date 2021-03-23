const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

//var User = mongoose.model('book');

const bookSchema = new Schema({
title: String, 
authors: [String],
 desription: String,
 image: String, 
 link: String, 
});

    const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

/* Example: 
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a 
  terrifying ... Katniss has been close to death before. For her, 
     survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}

*/
