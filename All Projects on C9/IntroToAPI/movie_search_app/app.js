var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   console.log("homepage"); 
   res.render("search");
});

app.get("/results", function(req, res) {
    var url = "http://omdbapi.com/?s=";
    var search = req.query.search;
    var suffix = "&apikey=thewdb";
    request(url + search + suffix, function(error, response, body) {
       if (!error && response.statusCode === 200) {
           var data = JSON.parse(body);
           res.render("results", {data:data});
       }
   });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Alright! Server in position!");
});