const router = require("express").Router();

const bookRoute = require("./books");

//routes:  Books
router.use("/books/saved", bookRoute);

module.exports = router; 

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
