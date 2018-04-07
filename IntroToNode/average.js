

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54,73, 63, 95, 49];
console.log("scores average: ");
console.log(average(scores));
console.log("scores2 average: ");
console.log(average(scores2));

function average(s) {
    var total = 0;
    s.forEach(function(score) {
        total += score;
    });
    
    var avg = total /s.length;
    return Math.round(avg);
}
