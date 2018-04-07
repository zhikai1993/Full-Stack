var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); //singular version

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// })

// george.save(function(err, cat){ //cat is coming back from database, thus it contains additional information like id and "__v"
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("We Just save a cat to DB: ");
//         console.log(cat);
//         //console.log(george);
//     } 
// });
Cat.create({
    name: "Snow White asd",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("Error!");
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats) {   // nested block codes are executed when find is done
  if (err) {
      console.log("OH No, Error!");
      console.log(err);
  } else {
      console.log("All the cats......");
      console.log(cats);
  }
});