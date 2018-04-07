var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")
    
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/Calm");
app.use(bodyParser.urlencoded({extended: true}));

var anecdoteSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Anecdote = mongoose.model("anecdote", anecdoteSchema);

//routes
app.get("/", function(req, res) {
    console.log("Someone entered your homepage");
    res.render("home");
});

app.get("/index", function(req, res){
    Anecdote.find({}, function(err, allcampgrounds) {
       if (err) {
           console.log("err");
       } else {
           res.render("index",{campgrounds:allcampgrounds});
       }
    });
});

app.post("/index", function(req, res) {
    var name = req.body.name;
    var img = req.body.image;
    var desc = req.body.description;
    Anecdote.create (
        {
            name: name,
            image: img,
            description: desc
        }, function(err, anecdote) {
            if (err) {
                console.log(err);
            } else {
                console.log("Newly Created Anecdote: ");
                console.log(anecdote);
                res.redirect("/index");
            }
        }
    )
});

app.get("/index/new", function(req, res) {
    console.log("Someone wants to add a new anecdote");
    res.render("new");
});


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is Running!"); 
});