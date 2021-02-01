// require dependencies
var express = require("express")
var path = require("path");

// set up express
var app = express();
var PORT = process.env.PORT || 3030

// set up the express app
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };

app.get("/yoda", function(req, res) {
    res.json(yoda);
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


// start the server
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});

