// && || !
var a = 20;
var b = 10;
var c = 40;
var d = 30;
if (a > b && c > d) {
    console.log('both condition are true');
}
else {
    console.log('at least one condition is false');
}
var a = 20;
var b = 10;
var c = 30;
var d = 40;
if (a > b || c > d) {
    console.log('at least one condition is true');
}
else {
    console.log('both condition are false');
}

var check = !(a > b);
console.log(check);