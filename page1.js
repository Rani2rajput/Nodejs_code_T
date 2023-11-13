const express = require("express");
const { dirname } = require("path");
const app = express();



// app.get('/', function(req, res) {
//     res.send("rani")
// });

// app.get('/about', function(req, res) {
//     res.send("rani is a girl")
// });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/server.html")
})

app.listen(3000, function() {
    console.log("Welcome WEb")
});