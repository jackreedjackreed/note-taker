const { response } = require("express");
const tableData = require("../data/tableData")
const waitlist = require("../data/waitlist")

module.exports = function(app) {
    app.get("/api/tables", function(request, response) {
        return response.json(tableData);
    })

    app.get("/api/waitlist", function(request, response){
        return response.json(waitlist)
    })

    app.post("/api/tables", function(request, response) {
        var data = request.body;
        console.log(data);
        if (tableData.length < 5) {
            tableData.push(data);
            response.json("Bingo!");
        } else {
            waitlist.push(data);
            response.json("Oop u just got added to the waitlist")
        }
    })    
}

// Reservation List

// Waitlist