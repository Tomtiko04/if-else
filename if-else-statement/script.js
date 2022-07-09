const koalas = 88 + 91 + 110;
const dolphinsAverage =96 + 108 + 89 / 3;
const koalasAverage = koalas / 3;
const dolphins2 = 97 + 112 + 101;
const koalas2 = 109 + 95 + 123;
const dolphinsAverage2 = dolphins / 3;
const koalasAverage2 = koalas / 3;

if (dolphinsAverage > koalasAverage) {
    console.log('dolphins wins');
} else if (dolphinsAverage === koalasAverage) {
    console.log('it is a draw');
} else {
    console.log('koalas wins');
}
console.log(dolphinsAverage2);
console.log(koalasAverage2);
if (dolphinsAverage2 >= 100 || koalasAverage2 >= 100) {
    console.log('the winner has 100 point above');
} else if (dolphinsAverage2 >= 100) {
    console.log('dolphins wins');
} else if (koalasAverage2 >= 100) {
    console.log('koalas wins');
} else {
    console.log('nobody wins');
}
