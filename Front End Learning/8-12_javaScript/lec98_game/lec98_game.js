var num = Number(prompt("User! Please enter a number: "));
var answer = 40;

while (num !== answer) {
	if (num < answer) {
		console.log("Bad guess, your number is lower");
		alert("Bad guess, your number is lower");
	} else {
		console.log("Bad guess, your number is higher");
		alert("Bad guess, your number is higher");
	}
	num = Number(prompt("User! Please take another guess"));
}

alert("Wow, you got it! right");