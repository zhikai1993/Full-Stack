// var input = prompt("Are we ther yet?");
// while(input !== "yes" && input != "yeah") {
// 	input = prompt("Are we ther yet?");
// }
// alert("YAY, we made it!!!");


// version2  
var input = prompt("Are we there yet?");
while (input.indexOf("yes") === -1 && input.indexOf("yeah") === -1) {
	input = prompt("Are we ther yet?");
}
alert("YAY, we made it!!!");