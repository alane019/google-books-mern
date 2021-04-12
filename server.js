const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
var cors = require("cors")
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ⇢ API server on http://localhost:${PORT} `);
});

