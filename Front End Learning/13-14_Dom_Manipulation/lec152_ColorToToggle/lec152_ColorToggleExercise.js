var button = document.querySelectorAll("button")[0];
//var isColored = true;
// button.addEventListener("click", function() {
// 	if (isColored) {
// 		document.body.style.background = "yellow";
// 	} else {
// 		document.body.style.background = "white";
// 	}
// 	isColored = !isColored;
// });

button.addEventListener("click", function() {
	document.body.classList.toggle("yellow");
})
