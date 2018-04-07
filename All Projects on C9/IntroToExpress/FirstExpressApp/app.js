var express = require("express");
var app = express();

app.get("/", function(req, res) {
    console.log("Someone just entered homepage");
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    console.log("Someone said goodbye!");
   res.send("GoodBye!"); 
});

app.get("/dog", function(req, res) {
    console.log("Someone made a request to /Dog")
    res.send("Woof!");
});

app.get("/r/:subredditName", function(req, res) {
    console.log(req);
    var subreddit = req.params.subredditName;
     res.send("Welcome to " + subreddit);
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log("someone went to comments");
    res.send("Welcome to the comments page");
});

app.get("*", function(req, res) {
    console.log("someone requests a wrong url");
    res.send("You are a star");
});

app.listen(process.env.PORT, process.env.IP,function() {
    console.log("Server has started");
});
