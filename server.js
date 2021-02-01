// require dependencies
var express = require("express")
var path = require("path");

// set up express
var app = express();
var PORT = process.env.PORT || 3030

// set up the express app
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// start the server
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});

