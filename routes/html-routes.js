var path = require("path");

module.exports = function(app) {
    // Basic route that sends the user first to the AJAX Page

    // take express app --> gives us the get method
    // with get, there are two params: app/url that we're gonna hit, a function that gets request/response --> logic to give front end proper html file
    // __dirname represents the absolute path --> built in "get" for the absolute path
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

     // If no matching route is found --> default to home
    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"));

    //  });
}

