
// pull in data from db
var fs = require("fs");
var path = require("path");
var notes = require("../db/db.json");
var { v4: uuidv4 } = require("uuid"); //Random id generator


module.exports = function (app) {

  // API GET REQUEST

    app.get("/api/notes", function (request, response) {
      console.log("getting api/notes");
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
      console.log('starting delete');
      console.log(notes);
      var deleteID = request.params.id
      console.log(deleteID);
      var deleted = notes.splice(notes.findIndex(i => i.id === deleteID), 1);
      console.log('filtering...');
      console.log(deleted);
      console.log(notes);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err)=>{
        if (err) throw err;
        response.json(notes);
      // const listWithFalse = originalList.filter(x=>!x.condition)
      //a.splice(a.findIndex(e => e.name === "tc_001"),1)
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
