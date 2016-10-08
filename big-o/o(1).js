var utils = require('../utils');

// Big O notation is a way to measure how well a
// computer algorithm scales as the amount of data
// involved increases. It is not always a measure
// of speed as you'll see below

// This is a rough overview of Big O and doesn't
// cover topics such as asymptotic analysis, which
// covers comparing algorithms as data approaches
// infinity

// What we are defining is the part of the algorithm
// that has the greatest effect. For example
// 45n^3 + 20n^2 + 19 = 84 (n=1)
// 45n^3 + 20n^2 + 19 = 459 (n=2) Does 19 matter?
// 45n^3 + 20n^2 + 19 = 47019 (n=10)
// Does the 20n^2 matter if 45n^3 = 45,000?
// Has an O(n^3) Order of n-cubed


//---------------------------------------------------
// O(1) An algorithm that executes in the same
// time regardless of the amount of data
// This code executes in the same amount of
// time no matter how big the array is

function addItemToArray(item, array) {
    utils.firstTime();
    array[array.length] = item;
    utils.lastTime();
}

var array = utils.randomArray(1000);
console.log('O(1):');
addItemToArray(1, array);
addItemToArray(2, array);
addItemToArray(3, array);
addItemToArray(4, array);
addItemToArray([1, 2, 3, 4], array);





