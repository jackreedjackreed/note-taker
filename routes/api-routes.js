const { response } = require("express");
// pull in data from db
var fs = require("fs");
var db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};

console.log(db);

module.exports = function (app) {

    // API GET REQUEST
    app.get("/api/notes", function (request, response) {
    // fs.readFile(
    //   db,
    //   { encoding: "utf8", flag: "r" },
    //   function (err, data) {
    //     if (err) console.log(err);
    //     else console.log(data);
    //   }
    // );
    console.log("getting api/notes");
    response.json(db);
  });

    // API POST REQUEST
  app.post("/api/notes", function (request, response) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    fs.readFile(data, function (err, data) {
        if (err) throw err;
        var notesArray = JSON.parse(data)
        var newNote = {...request.body, id: uuid() };         // code source @jongomezdev
        notesArray.push(newNote);
        fs.writeFileSync(db, JSON.stringify(notesArray));
        response.json(newNote);
    })
  })
};


  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function (req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });

// Reservation List

// Waitlist
