const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api"); 

 // If request URI matches path for API routes
 router.use("/api", apiRoutes);

//If request URI does not match API pattern, send to the React app
router.use(function(req, res){
 res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router; 