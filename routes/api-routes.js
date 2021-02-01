const { response } = require("express");

var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };


module.exports = function(app) {

    app.get("/api/notes", function(request, response) {
        return response.json(notes);
    })

    app.get("/api/yoda", function(req, res) {
        return res.json(yoda);
      });

    // app.get("/api/waitlist", function(request, response){
    //     return response.json(waitlist)
    // })

    // app.post("/api/tables", function(request, response) {
    //     var data = request.body;
    //     console.log(data);
    //     if (tableData.length < 5) {
    //         tableData.push(data);
    //         response.json("Bingo!");
    //     } else {
    //         waitlist.push(data);
    //         response.json("Oop u just got added to the waitlist")
    //     }
    // })    
}

// Reservation List

// Waitlist