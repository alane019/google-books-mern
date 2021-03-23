const express = require("express");
const bb = require("../models/books");

const router = express.router(); 

router.get("/api/books", (req, res) => {
    bb.find({})
    .then( (books) => res.json(books))
    .catch(err => res.status(400).json(err));

});


bb.post("/api/books", (req, res ) =>  {
    bb.create(req.body)
      .then((newBook) => res.json(newBook))
      .catch(err => res.status(500).json(err));
});

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
