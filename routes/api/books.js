const router = require("express").Router();

const booksController = require("../../controllers/booksController");

//API Matches "api/books"
router.route("/")
    .post(booksController.create) 
    .get(booksController.findAll);

//Search by title
router.route("/search/title")
    .get(booksController.findByTitle);


// Matches specific book ID ("/api/books/:id")
router.route("book/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);


module.exports = router; 
    