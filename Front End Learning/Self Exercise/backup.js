var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.getElementsByClassName("squares");
var colorCue = document.getElementById("colorCue");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var message = document.getElementById("message");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			numSquares = (this.textContent === "Easy") ? 3 : 6;
			reset();
		});
	}
}

function setupSquares() {
	// alert("asdad");
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				message.textContent = "You got it Correct, PangPang!";
				resetButton.textContent = "Play Again?";
			} else {
				message.textContent = "Pang Pang, try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	colorCue.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	message.textContent ="";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", reset);

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

