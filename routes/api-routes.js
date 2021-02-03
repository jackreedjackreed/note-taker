
// pull in data from db
var fs = require("fs");
var path = require("path");
var notes = require("../db/db.json");
var { v4: uuidv4 } = require("uuid"); //Random id generator


module.exports = function (app) {

  // API GET REQUEST

    app.get("/api/notes", function (request, response) {
    response.json(notes);

  });

  // API POST REQUEST

    app.post("/api/notes", function (request, response) {
      // get text of newNote and give it an id with uuid
      // req.body is available since we're using the body parsing middleware
      var newNote = {...request.body, id: uuidv4() };         // code source @jongomezdev
      // get notesArray from 
      notes.push(newNote);
      // use fs to read notes file and add in updated notes
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err)=>{
      if (err) throw err;
      response.json(notes);
      });
  });

  // API DELETE REQUEST

    app.delete("/api/notes/:id", function (request, response) {
      console.log('starting delete...');
      var deleteID = request.params.id
      var deleted = notes.splice(notes.findIndex(i => i.id === deleteID), 1);
      console.log('deleting...');
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err)=>{
        if (err) throw err;
        console.log("successful deleted!")
        response.json(notes);
      });
    });
};
