function isEven(num) {
	if (typeof num !== "number") {
		return false;
	}
	if (num % 2 === 1) {
		return false;
	}
	return true;
}

function factorial(num) {
	if (typeof num !== "number") {
		return 0;
	}
	var ans = 1;
	for (var i = num; i >= 2; i--) {
		ans = ans * i;
	}
	return ans;
}

function kebabToSnake(s) {
	if (typeof s !== "string") {
		return "";
	}

	return s.replace(/-/g, "_");
}