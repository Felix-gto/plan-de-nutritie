const express = require('express');
const app = express();

app.set("view engine", "ejs");

// Homepage - index.ejs file - app.get
app.get("/", function (req, res) {
    res.render("index");
});

app.get("/faza1", function (req, res) {
    res.render("faza1");
});

app.get("/faza2", function (req, res) {
    res.render("faza2");
});

app.get("/faza3", function (req, res) {
    res.render("faza3");
});

app.get("/faza4", function (req, res) {
    res.render("faza4");
});

app.get("/jurnal", function (req, res) {
    res.render("jurnal");
});


// Express - Static CSS files - tells Express to use the files inside the public folder as static files
app.use(express.static("public"));


// Server Running
app.listen(3000, function(req, res) {
    console.log("Server running on port 3000");
});