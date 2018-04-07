function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1]) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(element) {
		sum += element;
	});
	return sum;
}

function getMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}