//variable setup
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose")
    
mongoose.connect("mongodb://localhost/yelp_camp2"); //connect to database 
app.use(bodyParser.urlencoded({extended: true})); //
app.set("view engine", "ejs"); //set up ejs view engine

//Schema setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

//this is a model of the database yelp_camp, stored in Campground
var Campground = mongoose.model("Campground", campgroundSchema); 
    
    // Campground.create(
    //     {
    //         name: "Granite Hill", 
    //         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
    //         description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
    //     }, function(err, campground) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log("Newly Created Campground: ");
    //             console.log(campground);
    //         }
    //     }
    // )
    
//Routes
app.get("/", function(req, res){
    res.render("landing");
});

    //Index - Show all Campgrounds 
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allcampgrounds) {
       if (err) {
           console.log("err");
       } else {
           res.render("index",{campgrounds:allcampgrounds});
       }
    });
});

    //Create - add new campgrounds to database
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    Campground.create(
        {
            name: name,
            image: image,
            description: desc
        }, function(err, campground) {
            if (err) {
                console.log(err);
            } else {
                console.log("Newly Created Campground: ");
                console.log(campground);
                res.redirect("/campgrounds");
            }
        }
    )
});

    //New - show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

    //Show - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
       if (err) {
           console.log(err);
       } else {
           res.render("show", {campground:foundCampground})
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});