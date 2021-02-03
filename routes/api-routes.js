
// pull in data from db
var fs = require("fs");
var path = require("path");
var notes = require("../db/db.json");
var { v4: uuidv4 } = require("uuid"); //Random id generator

var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000,
};

console.log(notes);

module.exports = function (app) {

    // API GET REQUEST

    app.get("/api/notes", function (request, response) {
      console.log("getting api/notes");
    response.json(notes);

  });

    // API POST REQUEST
  app.post("/api/notes", function (request, response) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log("post request made");
    // get text of newNote and give it an id with uuid
    var newNote = {...request.body, id: uuidv4() };         // code source @jongomezdev
    // get notesArray from 
    console.log("new note received")
    console.log(newNote);
    console.log(notes);
    console.log("just logged notes")
    notes.push(newNote);
    console.log(notes)
    console.log("yay new notes")
    // use fs to read notes file and add in new note
    fs.readFile("../db/db", function (err) {
        if (err) throw err;
        notes.push(newNote);
    });
    fs.writeFile(path.join(__dirname, notes), JSON.stringify(notes), (err)=>{
        if (err) throw err;
        response.json(newNote);
    });
});
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
