var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){ 
    console.log("someone entered homepage");
    res.render("home");
    //res.send("<h1>Welcome to the homepage</h1><h2>blah blah </h2>");
})

app.get("/fallinginlovewith/:thing", function(req, res) {
    console.log("someone fell in love..");
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    console.log("Someone sneaked into posts");
    var posts = [
        {title: "Handsome!", author: "zhikai"},
        {title: "Pretty!", author: "godess"},
        {title: "Ugly", author: "other"}
    ]    
    res.render("posts", {posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Listening!");
});