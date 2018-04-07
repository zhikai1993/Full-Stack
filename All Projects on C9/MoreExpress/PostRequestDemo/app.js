var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = [
    "Tony", "Bob", "Dante", "zhikai", "Pangpang"    
];
    
app.get("/", function(req, res) {
   res.render("home"); 
});

app.post("/addfriends", function(req, res) {
    console.log("Someone wants to make some friends");
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends:friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is Running");
});