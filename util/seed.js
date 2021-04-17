const mongoose = require("mongoose"); 
const db = require("../models");

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
    {
        image: "test", 
        title: "test", 
        description: "test", 
        authors: ["test", "test"], 
        link: "test"
    }, 
    {
        image: "test", 
        title: "test2", 
        description: "test", 
        authors: ["test", "test"], 
        link: "test"
    }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


 


 