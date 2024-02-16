var date = new Date();
console.log(date);
var today = date.getDate();
console.log(today);
switch (today) {
    case 0:
        console.log('today is sunday');
        break;
    case 1:
        console.log('today is monday');
        break;
    case 2:
        console.log('today is tuesday');
        break;
    case 3:
        console.log('today is wednesday');
        break;
    case 4:
        console.log('today is thursday');
        break;
    case 5:
        console.log('today is friday');
        break;
    case 6:
        console.log('today is saturday');
        break;
    default: console.log('date does not match');
}