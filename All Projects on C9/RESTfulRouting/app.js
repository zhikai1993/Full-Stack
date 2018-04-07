var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer");
    
//APP CONFIG 
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer()); //have to be after bodyParser
app.use(methodOverride("_method"));
//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// For test Only
// Blog.create(
//     {
//         title: "Test Blog",
//         image: "http://img2.imgtn.bdimg.com/it/u=3215026496,1380637594&fm=214&gp=0.jpg",
//         body: "Hello, there is a big tree!"
//     }, function(err, blog) {
//         if (err) {
//             console.log("Error");
//             console.log(err);
//         } else {
//             console.log(blog);
//         }
//     }
// );

//RESTful ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

//Index Route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("WRONG HERE!!!")
            console.log(err);
        } else {
            res.render("index", {blogs:blogs});
        }
    })
});

//New Route
app.get("/blogs/new", function(req, res) {
    res.render("new");    
});

//CREATE ROUTE
app.post("/blogs", function(req, res) {
    console.log(req.body);
    req.body.req.body = req.sanitizer(req.body.blog.body);
    console.log("=============");
    console.log(req.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });  
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           console.log("error");
           res.redirect("/blogs");
       } else {
           res.render("show", {blog: foundBlog});
       }
   })
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
       if (err) {
           res.redirect("/blogs");
       } else {
           res.render("edit", {blog : foundBlog});
       }
    });
});


//UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    req.body.req.body = req.sanitizer(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
       if(err) {
           res.redirect("/blogs");
       }  else{
           res.redirect("/blogs/" + req.params.id);
       }
    });
});

//DELETE ROUTE
app.delete("/blos/:id/", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("RESTful Server is Running"); 
});