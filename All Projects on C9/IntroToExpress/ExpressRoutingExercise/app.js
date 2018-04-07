var express = require("express");
var app = express();

app.get("/", function(req, res) {
   console.log("someone entered my homepage");
   res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animals", function(req, res) {
   console.log("someone enter the speak animals page"); 
   var animal = req.params.animals.toLowerCase();
   var sounds = {
     pig: "Oink",
     cow: "Moo",
     dog: "Woof Woof",
     cat: "I hate you human",
     goldfish: "..."
   };
//   var sound;
//   if (animal === "pig") {
//       sound = "Oink";
//   } else if (animal === "cow") {
//       sound = "Moo";
//   } else if (animal === "dog") {
//       sound = "Woof Woof!";
//   } 

   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:greetings/:repeats", function(req, res) {
    console.log("someone made greetings");
    var greeting = req.params.greetings;
    var repeat = req.params.repeats;
    var result = "";
    for (var i = 0; i < repeat; i++) {
        result += greeting + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
   console.log("You are a star"); 
   res.send("Sorry, page not found... what are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
