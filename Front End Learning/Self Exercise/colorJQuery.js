var numSquares = 6;
var pickedColor;
var colors =[];
var squares = $(".squares");
var resetButton = $("#reset");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	$(".mode").on("click", function() {
		$(".mode").removeClass("selected");
		$(this).addClass("selected");
		numSquares = ($(this).text() === "Easy") ? 3 : 6;
		reset();
	});
}

function setupSquares() {
	$(".squares").on("click", function() {
		if ($(this).css("backgroundColor") === pickedColor) {
			changeColors(pickedColor);
			$("h1").css("backgroundColor", pickedColor);
			$("message").text("You got it Correct, PangPang!");
			resetButton.text("Play Again?");
		} else {
			$("message").text("Pang Pang, try Again!");
			$(this).css("backgroundColor", "#232323");
		}
	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	$("#colorCue").text(pickedColor);
	$("h1").css("backgroundColor", "steelblue");
	$("message").text("");
	resetButton.text("New Colors");
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}
resetButton.on("click", reset);

function changeColors(pickedColor) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickRandomColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num) {
	var colors = [];
	for( var i = 0; i < num; i++) {
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

